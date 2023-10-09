import dbConnect from '@/app/libs/dbConnect';
import ConversationModel from '@/app/models/ConversationModel';
import User from '@/app/models/UserModel';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    await dbConnect();

    const body = await request.json();
    const { email, password } = body;
    if (!email || !password) {
      return new NextResponse('Missing info', { status: 400 });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      email,
      hashedPassword,
    });
    const conversation = await ConversationModel.create({
      email: email,
      name: 'new chat',
    });
    return NextResponse.json(user, conversation);
  } catch (error) {
    console.log(error, 'Registration error');
    return new NextResponse('Internal error', { status: 500 });
  }
}
export async function GET() {
  try {
    await dbConnect();
    const user = await User.find();
    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
  }
}
