import prisma from '@/prisma';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
	try {
		// const { domain } = await req.json();
		// console.log(domain);
		const domain = 'webdev';

		prisma.$connect();
		// const domainRegistration = await prisma[domain].findMany({
		const domainRegistration = await prisma.rookie.findMany({
			include: {
				appdev: true,
			},
			where: {
				appdev: {
					isNot: null,
				},
			},
		});
		console.log(domainRegistration);

		return NextResponse.json(
			{
				domainRegistration,
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
	} finally {
		await prisma.$disconnect();
	}
}
