import prisma from '@/utils/prisma';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
	try {
		const { email, prn } = await req.json();

		if (!email || !prn) {
			return NextResponse.json(
				{
					message: 'Missing values',
					description:
						'Email and PRN are compulsary it seems you have missing one or more of them',
					type: 'error',
					code: 3,
				},
				{ status: 422 }
			);
		}

		console.log('email and prn is there');
		prisma.$connect();

		const existing = await prisma.rookie.findUnique({
			where: {
				prn,
			},
		});

		console.log(existing);

		if (existing === null) {
			console.log('i am here');
			return NextResponse.json(
				{
					message: 'User not registered',
					description: 'You have to register first before login',
					type: 'error',
					code: 7,
				},
				{ status: 401 }
			);
		}
		// console.log({
		// 	existing,
		// 	message: 'Login Successful',
		// 	description: 'Now you may continue to register for other domains',
		// 	type: 'success',
		// 	code: 2,
		// });

		if (email !== existing.email || prn !== existing.prn) {
			return NextResponse.json(
				{
					existing,
					message: "Credentials don't match",
					description: 'Check your PRN and Email once again',
					type: 'warn',
					code: 6,
				},
				{ status: 401 }
			);
		}

		return NextResponse.json(
			{
				existing,
				message: 'Login Successful',
				description:
					'Now you may continue to register for other domains',
				type: 'success',
				code: 2,
			},
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{
				type: 'error',
				message: error,
				description: JSON.stringify(error.message),
				type: 'error',
				code: 8,
			},
			{ status: 500 }
		);
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
		return NextResponse.json(
			{
				type: 'error',
				message: error,
				description: JSON.stringify(error.message),
				code: 8,
			},
			{ status: 500 }
		);
	} finally {
		prisma.$disconnect();
	}
}
