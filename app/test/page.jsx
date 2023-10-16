'use client';
import sendEmail from '@/utils/sendEmail';
import React from 'react';

const Testpage = () => {
	const handleClick = async () => {
		const userData = {
			username: 'Sarang Kumar',
			invitedByUsername: 'Invitor Name',
			clubEmail: 'invitor@example.com',
			clubWebsite: 'https://example.com',
			clubInstagram: 'https://instagram.com',
			clubName: 'Nexus',
			domain: 'Web Dev',
			prn: 'PESX202XXXXXX',
			domainId: '652b6cf6s34bf5b3aed5ae52',
		};
		// console.log(userData, 'from page.jsx')
		const data = await sendEmail(userData);
		// console.log(data);
	};

	return (
		<div className="flex justify-center items-center h-screen">
			<button
				onClick={handleClick}
				className="text-sm px-5 py-2 rounded-md text-foreground bg-secondary"
			>
				Testpage
			</button>
		</div>
	);
};

export default Testpage;
