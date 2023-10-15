// import {
// 	Body,
// 	Button,
// 	Container,
// 	Column,
// 	Head,
// 	Heading,
// 	Hr,
// 	Html,
// 	Img,
// 	Link,
// 	Preview,
// 	Row,
// 	Section,
// 	Tailwind,
// 	Text,
// } from '@react-email/components';
// import * as React from 'react';


// const baseUrl = process.env.VERCEL_URL
// 	? `https://${process.env.VERCEL_URL}`
// 	: '';

// export const Register = ({
// 	username = 'guest user',
// 	userImage = `${baseUrl}/static/vercel-user.png`,
// 	invitedByUsername = 'bukinoshita',
// 	invitedByEmail = 'bukinoshita@example.com',
// 	teamName = 'My Project',
// 	teamImage = `${baseUrl}/static/vercel-team.png`,
// 	inviteLink = 'https://vercel.com/teams/invite/foo',
// 	inviteFromIp = '204.13.186.218',
// 	inviteFromLocation = 'São Paulo, Brazil',
// }) => {
// 	const previewText = `Join ${invitedByUsername} on Vercel`;

// 	return (
// 		<Html>
// 			<Head />
// 			<Preview>{previewText}</Preview>
// 			<Tailwind>
// 				<Body className="bg-white my-auto mx-auto font-sans">
// 					<Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
// 						<Section className="mt-[32px]">
// 							<Img
// 								src={`${baseUrl}/static/vercel-logo.png`}
// 								width="40"
// 								height="37"
// 								alt="Vercel"
// 								className="my-0 mx-auto"
// 							/>
// 						</Section>
// 						<Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
// 							Join <strong>{teamName}</strong> on{' '}
// 							<strong>Vercel</strong>
// 						</Heading>
// 						<Text className="text-black text-[14px] leading-[24px]">
// 							Hello {username},
// 						</Text>
// 						<Text className="text-black text-[14px] leading-[24px]">
// 							<strong>bukinoshita</strong> (
// 							<Link
// 								href={`mailto:${invitedByEmail}`}
// 								className="text-blue-600 no-underline"
// 							>
// 								{invitedByEmail}
// 							</Link>
// 							) has invited you to the <strong>{teamName}</strong>{' '}
// 							team on <strong>Vercel</strong>.
// 						</Text>
// 						<Section>
// 							<Row>
// 								<Column align="right">
// 									<Img
// 										className="rounded-full"
// 										src={userImage}
// 										width="64"
// 										height="64"
// 									/>
// 								</Column>
// 								<Column align="center">
// 									<Img
// 										src={`${baseUrl}/static/vercel-arrow.png`}
// 										width="12"
// 										height="9"
// 										alt="invited you to"
// 									/>
// 								</Column>
// 								<Column align="left">
// 									<Img
// 										className="rounded-full"
// 										src={teamImage}
// 										width="64"
// 										height="64"
// 									/>
// 								</Column>
// 							</Row>
// 						</Section>
// 						<Section className="text-center mt-[32px] mb-[32px]">
// 							<Button
// 								pX={20}
// 								pY={12}
// 								className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center"
// 								href={inviteLink}
// 							>
// 								Join the team
// 							</Button>
// 						</Section>
// 						<Text className="text-black text-[14px] leading-[24px]">
// 							or copy and paste this URL into your browser:{' '}
// 							<Link
// 								href={inviteLink}
// 								className="text-blue-600 no-underline"
// 							>
// 								{inviteLink}
// 							</Link>
// 						</Text>
// 						<Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
// 						<Text className="text-[#666666] text-[12px] leading-[24px]">
// 							This invitation was intended for{' '}
// 							<span className="text-black">{username} </span>.This
// 							invite was sent from{' '}
// 							<span className="text-black">{inviteFromIp}</span>{' '}
// 							located in{' '}
// 							<span className="text-black">
// 								{inviteFromLocation}
// 							</span>
// 							. If you were not expecting this invitation, you can
// 							ignore this email. If you are concerned about your
// 							account&apos;s safety, please reply to this email to get
// 							in touch with us.
// 						</Text>
// 					</Container>
// 				</Body>
// 			</Tailwind>
// 		</Html>
// 	);
// };

// export default Register;

import {
	Body,
	Container,
	Head,
	Heading,
	Html,
	Img,
	Link,
	Preview,
	Text,
} from '@react-email/components';
import * as React from 'react';


export const Register = ({
	loginCode = 'sparo-ndigo-amurt-secan',
	username = 'guest user',
}) => (
	<Html>
		<Head />
		<Preview>Log in with this magic link</Preview>
		<Body style={main}>
			<Container style={container}>
				<Heading style={h1}>Login {username}</Heading>
				<Link
					href="https://notion.so"
					target="_blank"
					style={{
						...link,
						display: 'block',
						marginBottom: '16px',
					}}
				>
					Click here to log in with this magic link
				</Link>
				<Text style={{ ...text, marginBottom: '14px' }}>
					Or, copy and paste this temporary login code:
				</Text>
				<code style={code}>{loginCode}</code>
				<Text
					style={{
						...text,
						color: '#ababab',
						marginTop: '14px',
						marginBottom: '16px',
					}}
				>
					If you didn&apos;t try to login, you can safely ignore this
					email.
				</Text>
				<Text
					style={{
						...text,
						color: '#ababab',
						marginTop: '12px',
						marginBottom: '38px',
					}}
				>
					Hint: You can set a permanent password in Settings & members
					→ My account.
				</Text>
			
				<Text style={footer}>
					<Link
						href="https://notion.so"
						target="_blank"
						style={{ ...link, color: '#898989' }}
					>
						Notion.so
					</Link>
					, the all-in-one-workspace
					<br />
					for your notes, tasks, wikis, and databases.
				</Text>
			</Container>
		</Body>
	</Html>
);

export default Register;

const main = {
	backgroundColor: '#ffffff',
};

const container = {
	paddingLeft: '12px',
	paddingRight: '12px',
	margin: '0 auto',
};

const h1 = {
	color: '#333',
	fontFamily:
		"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
	fontSize: '24px',
	fontWeight: 'bold',
	margin: '40px 0',
	padding: '0',
};

const link = {
	color: '#2754C5',
	fontFamily:
		"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
	fontSize: '14px',
	textDecoration: 'underline',
};

const text = {
	color: '#333',
	fontFamily:
		"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
	fontSize: '14px',
	margin: '24px 0',
};

const footer = {
	color: '#898989',
	fontFamily:
		"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
	fontSize: '12px',
	lineHeight: '22px',
	marginTop: '12px',
	marginBottom: '24px',
};

const code = {
	display: 'inline-block',
	padding: '16px 4.5%',
	width: '90.5%',
	backgroundColor: '#f4f4f4',
	borderRadius: '5px',
	border: '1px solid #eee',
	color: '#333',
};
