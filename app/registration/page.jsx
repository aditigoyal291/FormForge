'use client';
import SubHero from '@/components/SubHero';
import Form from '@/components/form/Form';
import React, { useState } from 'react';
import DomainList from '@/components/form/DomainList';
import DomainQuestion from '@/components/form/DomainQuestion';

const RegistrationPage = () => {
	const [userData, setUserData] = useState({});
	const [domain, setDomain] = useState(null);
	const [page, setPage] = useState(1);
	const [domainData, setDomainData] = useState({});
	return (
		<>
			<main className="mt-1 mx-4 sm:mx-14 md:mx-28 gap-y-10 md:gap-y-14 flex justify-center flex-col">
				<div className="flex max-w-screen-xl outline flex-col gap-16">
					<SubHero
						title="Recruitment"
						subtitle="Our Story: Pioneering Progress in Technology and Innovation"
					>
						Some message
					</SubHero>
					<p className="text-white">
						{JSON.stringify(userData)}
						{JSON.stringify(domain)}
						{JSON.stringify(domainData)}
					</p>
					<div className="flex justify-center items-center md:w-[60vw] md:max-w-3xl w-full mx-auto">
						<div className="w-full border border-white/10 rounded-xl flex sm:p-10 p-4 justify-center">
							{page === 1 ? (
								<Form
									setUserData={setUserData}
									userData={userData}
									setPage={setPage}
								/>
							) : page === 2 ? (
								<DomainList
									setPage={setPage}
									setDomain={setDomain}
								/>
							) : page === 3 ? (
								<DomainQuestion
									setPage={setPage}
									userData={userData}
									domain={domain}
									setDomainData={setDomainData}
									domainData={domainData}
								/>
							) : (
								<></>
							)}
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default RegistrationPage;
