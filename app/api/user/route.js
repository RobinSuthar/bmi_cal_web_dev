import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { email, password, name, Weight, Height, Gender, Age } = body;

    if (
      Weight == null ||
      Height == null ||
      Gender == null ||
      Age == null ||
      Weight <= 0 ||
      Height <= 0 ||
      Age <= 0
    ) {
      return NextResponse.json(
        { error: 'Weight, Height, Gender, and Age are required and must be positive numbers' },
        { status: 400 }
      );
    }

    const heightInMeters = Height / 100;
    const BMI = parseFloat((Weight / (heightInMeters * heightInMeters)).toFixed(2));

    const newUser = await prisma.user.create({
      data: {
        email,
        password,
        name,
        Weight,
        Height,
        Gender,
        Age,
        BMI,
      },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error('API Error:', error.message);
    return NextResponse.json(
      { error: error.message || 'An unexpected error occurred' },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    console.error('API Error:', error.message);
    return NextResponse.json(
      { error: error.message || 'An unexpected error occurred' },
      { status: 500 }
    );
  }
};
