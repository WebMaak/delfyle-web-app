import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '@/lib/dbConnect';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
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
    const { email, password } = await request.json();
    if (!email || !password) {
      logger.info({ event: 'login_attempt', status: 'fail', email, ip, timestamp: new Date().toISOString(), message: 'Missing email or password' });
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }
    await dbConnect();
    const user = await User.findOne({ email });
    if (!user) {
      logger.info({ event: 'login_attempt', status: 'fail', email, ip, timestamp: new Date().toISOString(), message: 'User not found' });
      return NextResponse.json({ error: 'User not found' }, { status: 400 });
    }
    if ((user.status && user.status.toLowerCase() === 'blocked') || user.trash === true) {
      logger.info({ event: 'login_attempt', status: 'fail', email, ip, timestamp: new Date().toISOString(), message: 'Blocked or trashed user' });
      return NextResponse.json({ error: 'Your account is blocked or trashed. Please contact support.' }, { status: 403 });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      logger.info({ event: 'login_attempt', status: 'fail', email, ip, timestamp: new Date().toISOString(), message: 'Invalid password' });
      return NextResponse.json({ error: 'Invalid password' }, { status: 400 });
    }
    logger.info({ event: 'login_attempt', status: 'success', email, ip, timestamp: new Date().toISOString(), message: 'User login successful' });
    const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
    const response = NextResponse.json({ message: 'Sign in successful', user });
    response.cookies.set('token', token, { httpOnly: true, maxAge: 60 * 60 * 24 * 7 });
    return response;
  } catch (error) {
    logger.error({ event: 'login_attempt', status: 'fail', email: undefined, ip, timestamp: new Date().toISOString(), message: 'Login failed', error: (error as any)?.message });
    console.error('Sign in error:', error);
    return NextResponse.json({ error: 'Failed to sign in' }, { status: 500 });
  }
} 