import { domains } from '@/constants/baseQuestions';
import { useState } from 'react';
import Message from '../Message';
import club from './../../constants/club';
import Button from '../Button';

const DomainList = ({ setPage, setDomain }) => {
	const handleDomainChange = (e) => {
		e.preventDefault();
		if (domains !== null || domains !== undefined) {
			setPage(3);
			return;
		}

		setMessage({
			display: true,
			type: 'warn',
			message: 'Domain missing',
			description: 'Select a domain to proceed',
		});

		setTimeout(() => {
			setMessage({ display: false });
		}, 2000);
	};

	const [message, setMessage] = useState({
		display: false,
		message: '',
		description: '',
		type: '',
	});

	return (
		<form className="flex text-foreground my-10 w-full text-sm">
			<div className="flex flex-col gap-y-6 w-full">
				<div>
					<h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-secondary via-secondary/80 to-primary animate-gradient font-semibold tracking-tight">
						{club.club.name} Registrations
					</h1>
					<span className="text-base text-foreground">
						Enter the domain of your interest
					</span>
				</div>
				<div className="grid grid-cols-1 gap-4">
					{domains.map((domain, i) => (
						<div
							className="radio-label outline-offset-0 flex rounded-md focus:outline-secondary"
							key={i}
						>
							<label
								htmlFor={domain.name}
								className="relative bg-foreground/[0.04] hover:bg-foreground/10 border-foreground/10 focus:outline-secondary border-[1px] font-medium hover:shadow-lg shadow-md cursor-pointer p-4 flex items-center justify-center rounded-md z-10 w-full"
							>
								<div className="flex flex-col gap-y-1 w-full p-2">
									<div className="flex gap-4">
										<h2 className="text-base font-semibold text-foreground">
											{domain.domain}
										</h2>
										<p className="text-white whitespace-nowrap shadow-2xl h-fit px-3 rounded-md outline-none bg-gradient-to-r from-secondary via-secondary/80 to-primary animate-gradient font-semibold flex items-center justify-center text-xxs">
											{domain.type === 'tech'
												? 'Tech'
												: 'Non-Tech'}
										</p>
									</div>
									<p className="text-xs leading-5">
										{domain.description}
									</p>
								</div>
								<input
									type="radio"
									name="semester"
									onChange={(e) => setDomain(e.target.value)}
									id={domain.name}
									value={domain.name}
									required
									className="self-start box-content rounded-full bg-foreground/20 p-1 ring-foreground/20 bg-clip-padding outline-none ring-1  checked:border-primary checked:border-[4px] checked:ring-primary w-2 appearance-none h-2 checked:bg-white/80 border-[5px] border-foreground/20"
								/>
							</label>
						</div>
					))}
				</div>
				<Message
					type={message.type}
					message={message.message}
					display={message.display}
				>
					{message.description}
				</Message>
				<div className="flex items-center justify-end gap-2 md:gap-3">
					<Button
						variant="mute"
						type="reset"
						handleClick={() => setDomain(null)}
					>
						Reset
					</Button>
					<Button
						type="button"
						handleClick={(e) => handleDomainChange(e)}
					>
						Register
					</Button>
				</div>
			</div>
		</form>
	);
};

export default DomainList;
