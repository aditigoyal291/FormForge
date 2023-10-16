'use client';
import SubHero from '@/components/Subhero';
import Form from '@/components/form/Form';
import React, { useState } from 'react';
import DomainList from '@/components/form/DomainList';
import DomainQuestion from '@/components/form/DomainQuestion';
import Navbar from '@/components/Navbar';

const RegistrationPage = () => {
	const [userData, setUserData] = useState({});
	const [domain, setDomain] = useState(null);
	const [page, setPage] = useState(1);
	const [domainData, setDomainData] = useState({});
	return (
		<>
			<Navbar />
			<main className="main my-10 mx-4 sm:mx-14 md:mx-auto max-w-screen-xl gap-y-10 md:gap-y-14 flex justify-center flex-col">
				<div className="gradient flex flex-col gap-16">
					{/* <SubHero
						title="Recruitment"
						subtitle="Our Story: Pioneering Progress in Technology and Innovation"
					>
						Some message
					</SubHero> */}
					{process.env.NODE_ENV !== 'production' && (
						<p className="text-foreground text-xs">
							{JSON.stringify(userData)}
							{JSON.stringify(domain)}
							{JSON.stringify(domainData)}
						</p>
					)}
					<div className="flex justify-center items-center md:w-[60vw] md:max-w-3xl w-full mx-auto mb-10">
						<div className="outline-foreground/10 outline w-full rounded-xl flex sm:p-10 p-4 justify-center backdrop-blur-lg">
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
