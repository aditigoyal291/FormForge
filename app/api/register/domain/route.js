import prisma from '@/prisma';
import { NextResponse } from 'next/server';

let maxDomainCount = 2;

export async function POST(req, res) {
	// const repeatedDomain = (arr, domain) => {
	// 	if (arr.includes(domain)) {
	// 		return NextResponse.json(
	// 			{
	// 				message: `Already registered for ${domain}`,
	// 				description:
	// 					'You cannot register for the same domain twice',
	// 				type: 'warn',
	// 				code: 4,
	// 			},
	// 			{ status: 422 }
	// 		);
	// 	}
	// };

	try {
		const body = await req.json();
		const { domain, email, prn } = body;
		console.log(body);

		if (!email || !prn || !domain) {
			return NextResponse.json(
				{
					message: 'Missing values',
					description:
						'Email, PRN and Domain are compulsary it seems you have missing one or more of them',
					type: 'error',
					code: 3,
				},
				{ status: 422 }
			);
		}
		prisma.$connect();

		const existing = await prisma.rookie.findFirst({
			where: {
				email,
				prn,
			},
		});

		// console.log(existing);

		if (existing === null) {
			return NextResponse.json(
				{
					code: 1,
					message: 'PRN and Email does not match',
					description: 'Check your PRN and Email once again',
					type: 'error',
				},
				{ status: 422 }
			);
		}

		if (existing.registeredDomains.length >= maxDomainCount) {
			return NextResponse.json(
				{
					message: 'Maximum Submission for domain reached',
					description: `You already registered for ${maxDomainCount} domains. You cannot register for more`,
					type: 'error',
					code: 6,
				},
				{ status: 422 }
			);
		}

		let domainRegistration;
		const {
			solution1,
			solution2,
			solution3,
			solution4,
			solution5,
			solution6,
		} = body;

		switch (domain) {
			case 'webdev':
				console.log('webdev');

				// repeatedDomain(existing.registeredDomains, 'webdev');

				domainRegistration = await prisma.webdev.create({
					data: {
						solution1,
						solution2,
						solution3,
						solution4,
						solution5,
						rookieId: existing.id,
					},
				});
				break;
			case 'appdev':
				console.log('appdev');

				// repeatedDomain(existing.registeredDomains, 'appdev');

				console.log(solution1);

				domainRegistration = await prisma.appdev.create({
					data: {
						solution1,
						solution2,
						solution3,
						solution4,
						rookieId: existing.id,
					},
				});
				break;
			case 'aiml':
				console.log('aiml');

				// repeatedDomain(existing.registeredDomains, 'aiml');

				domainRegistration = await prisma.aiml.create({
					data: {
						solution1,
						solution2,
						solution3,
						solution4,
						rookieId: existing.id,
					},
				});
				break;
			case 'cp':
				console.log('cp');

				// console.log(
				// 	existing.registeredDomains,
				// 	existing.registeredDomains.includes('cp')
				// 	);
				// 	repeatedDomain(existing.registeredDomains, 'cp');
				domainRegistration = await prisma.cp.create({
					data: {
						solution1,
						solution2,
						solution3,
						solution4,
						rookieId: existing.id,
					},
				});
				break;
			case 'design':
				console.log('design');

				// repeatedDomain(existing.registeredDomains, 'design');
				domainRegistration = await prisma.design.create({
					data: {
						solution1,
						solution2,
						solution3,
						solution4,
						rookieId: existing.id,
					},
				});
				break;
			case 'operation':
				console.log('operation');

				// repeatedDomain(existing.registeredDomains, 'operation');
				domainRegistration = await prisma.operation.create({
					data: {
						solution1,
						solution2,
						solution3,
						solution4,
						rookieId: existing.id,
					},
				});
				break;
			case 'content':
				console.log('content');

				// repeatedDomain(existing.registeredDomains, 'content');
				domainRegistration = await prisma.content.create({
					data: {
						solution1,
						solution2,
						solution3,
						solution4,
						rookieId: existing.id,
					},
				});
				break;
			case 'marketing':
				console.log('marketing');

				// repeatedDomain(existing.registeredDomains, 'marketing');
				domainRegistration = await prisma.marketing.create({
					data: {
						solution1,
						solution2,
						solution3,
						solution4,
						rookieId: existing.id,
					},
				});
				break;
			case 'logistics':
				console.log('logistics');

				// repeatedDomain(existing.registeredDomains, 'logistics');
				domainRegistration = await prisma.logistics.create({
					data: {
						solution1,
						solution2,
						solution3,
						solution4,
						rookieId: existing.id,
					},
				});

				break;
			case 'evm':
				console.log('evm');

				// repeatedDomain(existing.registeredDomains, 'evm');
				domainRegistration = await prisma.evm.create({
					data: {
						solution1,
						solution2,
						solution3,
						solution4,
						solution5,
						rookieId: existing.id,
					},
				});
				break;
			case 'campaigning':
				console.log('campaigning');

				// repeatedDomain(existing.registeredDomains, 'campaigning');
				domainRegistration = await prisma.campaigning.create({
					data: {
						solution1,
						solution2,
						solution3,
						solution4,
						rookieId: existing.id,
					},
				});
				break;
			case 'sponsor':
				console.log('sponsor');

				// repeatedDomain(existing.registeredDomains, 'sponsor');
				domainRegistration = await prisma.sponsor.create({
					data: {
						solution1,
						solution2,
						solution3,
						solution4,
						rookieId: existing.id,
					},
				});
				break;
			case 'pr':
				console.log('pr');

				// repeatedDomain(existing.registeredDomains, 'pr');
				domainRegistration = await prisma.pr.create({
					data: {
						solution1,
						solution2,
						solution3,
						solution4,
						rookieId: existing.id,
					},
				});
				break;
			default:
				return NextResponse.json({
					message: 'Choose the domain properly',
					status: 'warn',
					description:
						'The option that you chose is not matching with the domains that we offered',
					code: 7,
				});
		}

		const updatedRookie = await prisma.rookie.update({
			where: {
				prn: existing.prn,
			},
			data: {
				registeredDomains: [...existing.registeredDomains, domain],
			},
		});

		return NextResponse.json(
			{
				updatedRookie,
				type: 'success',
				message: 'Registration Accepted',
				description: `you are registerd for ${domain}`,
				code: 2,
			},
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{
				message: `Already registered for this domain`,
				description: 'You cannot register for the same domain twice',
				type: 'error',
				code: 8,
			},
			{ status: 500 }
		);
	} finally {
		await prisma.$disconnect();
	}
}
