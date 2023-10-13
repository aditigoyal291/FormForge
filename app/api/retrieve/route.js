import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const { email, prn } = await req.json();

    if (!email || !prn) {
      return NextResponse.json(
        { message: "Missing values", code: 3 },
        { status: 422 }
      );
    }

    // console.log(email, prn);

    console.log('email and prn is there')
    prisma.$connect();

    const existing = await prisma.rookie.findUnique({
      where: {
        email,
        prn,
      },
      // include: {
      //   domain: true,
      // },
    });

    console.log(existing);

    return NextResponse.json({ existing, code: 2 }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
}

export async function GET(req, res) {
  try {
    prisma.$connect();
    const allRegistrations = await prisma.rookie.findMany({
      include: {
        webdev: true,
        appdev: true,
        aiml: true,
        cp: true,
        logistics: true,
        operation: true,
        marketing: true,
        campaigning: true,
        pr: true,
        sponsor: true,
        design: true,
        content: true,
        evm: true,
      },
    });
    return NextResponse.json(allRegistrations, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
}
