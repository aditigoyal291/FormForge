import {
	Body,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Img,
	Link,
	Preview,
	Row,
	Section,
	Tailwind,
	Text,
} from '@react-email/components';
import * as React from 'react';

export const Register = ({
	username = 'Guest User',
	invitedByUsername = 'Invitor Name',
	clubEmail = 'invitor@example.com',
	clubWebsite = 'https://example.com',
	clubInstagram = 'https://instagram.com',
	clubName = 'Club Name',
	domain = 'Domain',
	prn = 'PESX202XXXXXX',
	registrationId = '652b6cf6s34bf5b3aed5ae52',
}) => {
	const previewText = `Registered ${invitedByUsername} for ${clubName}`;
	const title = `Registered ${invitedByUsername} for ${clubName}`;

	return (
		<Html>
			<Head>{title}</Head>
			<Preview>{previewText}</Preview>
			<Tailwind>
				<Body className="bg-white my-auto mx-auto font-sans">
					<Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
						<Section className="mt-[32px]">
							<Img
								src="/static/clubLogo.png"
								width="40"
								height="37"
								alt="Club logo"
								className="my-0 mx-auto"
							/>
						</Section>
						<Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
							Registration Successfull
						</Heading>
						<Text>
							Registered for <strong>{domain}</strong> domain
							under <strong>{clubName}</strong>
						</Text>
						<Text className="text-black text-[14px] leading-[24px]">
							Hello {username}, {prn}
						</Text>
						<Text>
							We are thrilled to confirm your registration for{' '}
							{domain} under {clubName}. Your participation is
							greatly appreciated, and we look forward to seeing
							you soon in the interview process.
						</Text>
						<Text>
							Keep an eye for updates on our{' '}
							<Link
								className="text-blue-600 no-underline"
								href={clubWebsite}
							>
								Website
							</Link>{' '}
							and{' '}
							<Link
								className="text-blue-600 no-underline"
								href={clubInstagram}
							>
								Instagram
							</Link>
						</Text>
						<Text>Registration id for {domain} domain</Text>
						<Section className="text-center mt-[32px] mb-[32px]">
							<Text className="py-1.5 px-3 inline-block bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center">
								{registrationId}
							</Text>
						</Section>
						<Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
						<Text className="text-[#666666] text-[12px] leading-[24px]">
							This invitation was intended for{' '}
							<span className="text-black">{username}</span>. If
							you were not expecting this invitation, you can
							ignore this email. If you are concerned about your
							account&apos;s safety, please reply to{' '}
							<Link
								className="text-blue-600 no-underline"
								href={`mailto:${clubEmail}`}
							>
								this email
							</Link>{' '}
							to get in touch with us.
						</Text>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default Register;
