import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import Register from '@/emails/Register';


const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {

	console.log('i am running');

	const body = await req.json();
	console.log(body);

	try {
		console.log('i am running 2');
		const emailData = await resend.sendEmail({
			// from: 'email@zenohash.dev',
			from: 'onboardin@resend.dev',
			to: 'sarangkumar1578@gmail.com',
			subject: 'Registration Done',
			react: Register({username: 'Sarang'}),
		});
		console.log('i am running 3');
        console.log(emailData)
        
		return NextResponse.json(emailData);
	} catch (error) {
		return NextResponse.json({ error });
	}
}
