import React, { useState } from 'react';
import {
	CheckboxInput,
	RadioInput,
	RangeInput,
	SelectInput,
	TextAreaInput,
	TextInput,
	EmailInput,
	TelInput,
} from './Inputs';
import { questions } from '../../constants/question';
import { useRouter } from 'next/navigation';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { BsArrowLeftShort } from 'react-icons/bs';
import Message from '../Message';
import club from '@/constants/club';
import sendEmail from '@/utils/sendEmail';
import Button from '../Button';

const DomainQuestion = ({
	setPage,
	userData,
	domain,
	setDomainData,
	domainData,
}) => {
	const handleChange = (e) => {
		setDomainData({ ...domainData, [e.target.name]: e.target.value });
	};

	const domainQuestions = questions.find(
		(domain_) => domain === domain_.domain
	);

	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState({
		display: false,
		message: '',
		description: '',
		type: '',
	});
	const router = useRouter();

	const handleDomainSubmission = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const res = await fetch('/api/register/domain', {
				method: 'POST',
				body: JSON.stringify({
					...domainData,
					domain: domain,
					email: userData.email.toLowerCase(),
					prn: userData.prn.toLowerCase(),
				}),
			});
			const data = await res.json();
			console.log(data, 'from domain questionn');

			setMessage({
				display: true,
				type: data.type,
				message: data.message,
				description: data.description,
			});

			if (data.code === 2) {
				try {
					console.log({
						domain: domain,
						username: data.updatedRookie.name,
						useremail: data.updatedRookie.email,
						invitedByUsername: club.club.name,
						clubEmail: club.club.email,
						clubWebsite: club.club.website,
						clubInstagram: club.club.instagram,
						clubName: club.club.name,
						prn: data.updatedRookie.prn,
						registrationId: data.updatedRookie.id,
					});
					console.log('domain question');

					const emailData = await sendEmail({
						domain: domain,
						username: data.updatedRookie.name,
						useremail: data.updatedRookie.email,
						invitedByUsername: club.club.name,
						clubEmail: club.club.email,
						clubWebsite: club.club.website,
						clubInstagram: club.club.instagram,
						clubName: club.club.name,
						prn: data.updatedRookie.prn,
						registrationId: data.updatedRookie.id,
					});
				} catch (error) {
					console.log('could not send email');
				}

				setTimeout(() => {
					setPage(2);
				}, 2000);
			}
		} catch (error) {
			setMessage({
				display: true,
				message: 'Repeated domain selection',
				description: 'You cannot register for the same domain again',
				type: 'error',
			});
		} finally {
			setLoading(false);
			setTimeout(() => {
				setMessage({ display: false });
			}, 2000);
		}
	};

	return (
		<>
			<div className="text-foreground w-full">
				<form
					action=""
					onSubmit={(e) => handleDomainSubmission(e)}
					className="text-foreground text-sm my-5 w-full flex flex-col gap-y-6 accent-secondary"
				>
					<div>
						<h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-secondary via-secondary/80 to-primary animate-gradient font-semibold tracking-tight">
							{club.club.name} Registrations
						</h1>
						<h2 className="text-base text-foreground">
							{domainQuestions.domainFullName}
						</h2>
					</div>

					{domainQuestions.questions.map((question) => {
						const { inputType } = question;

						if (inputType === 'text') {
							return (
								<TextInput
									key={question.id}
									{...question}
									handleChange={handleChange}
								/>
							);
						} else if (inputType === 'email') {
							return (
								<EmailInput
									key={question.id}
									{...question}
									handleChange={handleChange}
								/>
							);
						} else if (inputType === 'radio') {
							return (
								<RadioInput
									key={question.id}
									{...question}
									handleChange={handleChange}
								/>
							);
						} else if (inputType === 'tel') {
							return (
								<TelInput
									key={question.id}
									{...question}
									handleChange={handleChange}
								/>
							);
						} else if (inputType === 'checkbox') {
							return (
								<CheckboxInput
									key={question.id}
									{...question}
									handleChange={handleChange}
								/>
							);
						} else if (inputType === 'range') {
							return (
								<RangeInput
									key={question.id}
									{...question}
									handleChange={handleChange}
								/>
							);
						} else if (inputType === 'textarea') {
							return (
								<TextAreaInput
									key={question.id}
									{...question}
									handleChange={handleChange}
								/>
							);
						} else {
							return <SelectInput key={question.id} />;
						}
					})}

					<Message
						type={message.type}
						message={message.message}
						display={message.display}
					>
						{message.description}
					</Message>

					<div className="grid grid-cols-2 gap-2">
						<Button
							type="button"
							handleClick={() => setPage(2)}
							variant="mute"
						>
							Back
						</Button>
						<Button
							type="submit"
							className=""
							loading={loading}
							handleClick={handleDomainSubmission}
						>
							Register
						</Button>
					</div>
				</form>
			</div>
		</>
	);
};

export default DomainQuestion;
