import React, { useState } from 'react';
import {
	CheckboxInput,
	RadioInput,
	RangeInput,
	SelectInput,
	TextAreaInput,
	TextInput,
} from './Inputs';
import { questions } from './question';
import { useRouter } from 'next/navigation';

const DomainQuestion = ({
	setPage, 
  userData,
	domain,
	setDomainData,
	domainData,
}) => {
	const handleChange = (e) => {
		setDomainData({ ...domainData, [e.target.name]: e.target.value });
		console.log(domainData);
	};

	const domainQuestions = questions.find(
		(domain_) => domain === domain_.domain
	);

	const [loading, setLoading] = useState(false);
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
					email: userData.email?.toLowerCase(),
					prn: userData.prn?.toUpperCase(),
				}),
			});
			const data = await res.json();

			router.push('/');

			// localStorage.setItem('rookie', JSON.stringify(domainData));
			console.log(data);
			setPage(1);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<div className="text-white w-full">
				<form
					action=""
					onSubmit={(e) => handleDomainSubmission(e)}
					className="text-white text-sm my-5 w-full flex flex-col gap-y-6 accent-secondary"
				>
					<h2 className="text-2xl font-bold text-primary">
						{domainQuestions.domainFullName}
					</h2>
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
						} else if (inputType === 'radio') {
							return (
								<RadioInput
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
					<div className="grid grid-cols-2 gap-2">
						<button
							type="button"
							onClick={() => setPage(2)}
							className="flex rounded items-center justify-center border border-shaded hover:bg-shaded"
						>
							Back
						</button>

						<button
							disabled={loading}
							className={`${
								loading ? 'cursor-not-allowed' : ''
							} p-2 rounded font-medium text-sm text-white bg-secondary`}
						>
							{loading ? 'Loading...' : 'Submit'}
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default DomainQuestion;
