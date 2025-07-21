// @ts-ignore: No types for nodemailer
import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '@/lib/dbConnect';
import Lead from '@/models/Lead';
import User from '@/models/User';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '@/utils/jwt';
import logger from '@/utils/logger';

const rateLimitWindowMs = 60 * 1000; // 1 minute
const rateLimitMax = 5;
const rateLimitMap: { [ip: string]: { count: number; lastRequest: number } } = {};

function getClientIp(request: NextRequest) {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
}

export async function POST(request: NextRequest) {
  // Rate limiting logic
  const ip = getClientIp(request);
  const now = Date.now();
  const entry = rateLimitMap[ip] || { count: 0, lastRequest: now };
  if (now - entry.lastRequest > rateLimitWindowMs) {
    entry.count = 1;
    entry.lastRequest = now;
  } else {
    entry.count++;
  }
  rateLimitMap[ip] = entry;
  if (entry.count > rateLimitMax) {
    return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
  }

  try {
    const { fullName, phone, email, service, message } = await request.json();

    await dbConnect();

    // Get JWT token from cookies
    const token = request.cookies.get('token')?.value;
    if (!token) {
      return NextResponse.json({ error: 'Sign in to Submit' }, { status: 401 });
    }

    // Verify JWT and extract user ID
    let payload;
    try {
      payload = jwt.verify(token, JWT_SECRET);
    } catch (err) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    // Extract userId from payload
    let userId: string | undefined;
    if (typeof payload === 'object' && payload && 'userId' in payload) {
      userId = (payload as { userId?: string }).userId;
    }
    if (!userId) {
      return NextResponse.json({ error: 'Invalid token payload' }, { status: 400 });
    }

    // Save to DB (leads collection)
    let leadDoc;
    leadDoc = await Lead.create({
      fullName,
      email,
      phoneNumber: phone,
      message,
      service: Array.isArray(service) ? service : [service],
      status: 'pending',
      assignedBo: 'none',
      trash: false,
      user: userId,
    });
    logger.info({ event: 'lead_created', status: 'success', email, userId, leadId: leadDoc._id, ip, timestamp: new Date().toISOString(), message: 'Lead created via contact form' });
    // Push lead ID to user's leadsInitiated
    await User.findByIdAndUpdate(userId, { $push: { leadsInitiated: leadDoc._id } });

    // Configure your SMTP transport (Gmail example)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // sender: kunalparaye39@gmail.com
        pass: process.env.GMAIL_PASS, // sender's password
      },
    });

    await transporter.sendMail({
      from: `"Delfyle Main" <${process.env.GMAIL_USER}>`, // sender
      to: 'delfylesales@gmail.com', // recipient
      subject: `New Contact: ${fullName} (${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()})`,
      html: `
        <h2>Delfyle Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    logger.error({ event: 'lead_created', status: 'fail', email: undefined, userId: undefined, leadId: undefined, ip, timestamp: new Date().toISOString(), message: 'Lead creation failed', error: (error as any)?.message });
    console.error('Nodemailer error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
} 