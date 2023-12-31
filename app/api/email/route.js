import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import Register from '@/emails/Register';


const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {

	// console.log('i am running');

	const body = await req.json();
	console.log(body);
	// console.log('from route.js');

	try {
		console.log('i am running 2');
		const emailData = await resend.sendEmail({
			// from: 'email@zenohash.dev',
			from: 'onboardin@resend.dev',
			to: 'sarangkumar1578@gmail.com',
			// to: body.useremail,
			subject: 'Registration Done',
			react: Register(body),
		});
		// console.log('i am running 3');
        console.log(emailData, 'email data')
        
		return NextResponse.json(emailData);
	} catch (error) {
		return NextResponse.json({ error });
	}
}
