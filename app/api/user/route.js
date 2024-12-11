import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password, name, Weight, Height, Gender, Age } = body;

    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: "Email and Password are required" }),
        { status: 400 }
      );
    }

    const BMI = Weight && Height ? Weight / (Height * Height) : null;

    const user = await prisma.user.create({
      data: {
        email,
        password,
        name,
        Weight: Weight ? parseFloat(Weight) : null,
        Height: Height ? parseFloat(Height) : null,
        Gender,
        Age: Age ? parseInt(Age) : null,
        BMI,
      },
    });

    return new Response(JSON.stringify(user), { status: 201 });
  } catch (error) {
    console.error("API Error:", error);
    return new Response(
      JSON.stringify({ error: "Error creating user", details: error.message }),
      { status: 500 }
    );
  }
}
