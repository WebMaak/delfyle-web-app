// @ts-ignore: No types for nodemailer
import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { fullName, phone, email, service, message } = await request.json();

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
      to: 'delfyletech@gmail.com', // recipient
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
    console.error('Nodemailer error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
} 