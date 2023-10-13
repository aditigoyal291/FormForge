import prisma from '@/prisma';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
	try {
		let { name, email, prn, phone, semester, course, bio } =
			await req.json();
		semester = parseInt(semester);
		if (!name || !email || !prn || !phone || !semester || !course || !bio) {
			return NextResponse.json(
				{
					message: 'Missing values',
					description: 'Required fields are missing',
					type: 'warn',
					code: 3,
				},
				{ status: 422 }
			);
		}

		prisma.$connect();

		const existing = await prisma.rookie.findUnique({
			where: {
				email,
				prn,
			},
		});

		if (existing !== null) {
			return NextResponse.json(
				{
					message: 'PRN and Email already exists',
					description:
						'You are already registered. Sign to chose your next prefered domain',
					status: 'warn',
					code: 1,
				},
				{ status: 402 }
			);
		}

		const newRegistration = await prisma.rookie.create({
			data: {
				name,
				email,
				prn,
				phone,
				semester,
				course,
				bio,
			},
		});

		return NextResponse.json(
			{
				newRegistration,
				code: 2,
				type: 'success',
				message: 'User signin successfull',
				description: 'Now proceed to chose your domain of interest',
			},
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{
				type: 'error',
				message: error,
				description: error.message,
				status: 'error',
			},
			{ status: 500 }
		);
		return NextResponse.json({ status: 500 });
	} finally {
		prisma.$disconnect();
	}
}

// 1: Email and PRN does not match
// 2: Success
// 3: Missing value
// 5: User already exists
// 4: Already registered for domain
// 6: Max domain count reached
// 7: Invalid domain
