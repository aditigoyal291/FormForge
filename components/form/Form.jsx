import React, { useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const semesterOptions = [
	{
		id: 1,
		htmlForLabel: 'semester1',
		value: 1,
		name: 'semester',
	},
	{
		id: 2,
		htmlForLabel: 'semester2',
		value: 2,
		name: 'semester',
	},
	{
		id: 3,
		htmlForLabel: 'semester3',
		value: 3,
		name: 'semester',
	},
	{
		id: 4,
		htmlForLabel: 'semester4',
		value: 4,
		name: 'semester',
	},
];

const courseOptions = [
	{
		id: 1,
		htmlForLabel: 'course1',
		value: 'B.Tech CSE',
		name: 'course',
	},
	{
		id: 2,
		htmlForLabel: 'course2',
		value: 'B.Tech EEE',
		name: 'course',
	},
	{
		id: 3,
		htmlForLabel: 'course3',
		value: 'B.Tech ECE',
		name: 'course',
	},
	{
		id: 4,
		htmlForLabel: 'course4',
		value: 'M.Tech',
		name: 'course',
	},
	{
		id: 5,
		htmlForLabel: 'course5',
		value: 'B.Design',
		name: 'course',
	},
	{
		id: 6,
		htmlForLabel: 'course6',
		value: 'Psychology',
		name: 'course',
	},
];

const Form = ({ setUserData, userData, setPage }) => {
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
	};

	const handleRegistration = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			setUserData({
				...userData,
				name: userData.name.toLowerCase(),
				email: userData.email.toLowerCase(),
				prn: userData.prn.toLowerCase(),
				course: userData.course,
				domain: userData.domain,
			});

			const res = await fetch('/api/register', {
				method: 'POST',
				body: JSON.stringify(userData),
			});
			const data = await res.json();

			localStorage.setItem('rookie', JSON.stringify(userData));
			console.log(data);
			setPage(2);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<form
				onSubmit={(e) => handleRegistration(e)}
				className="text-white my-5 w-full flex flex-col gap-y-6 accent-secondary text-xs md:text-sm"
			>
				<label
					htmlFor="name"
					className="flex flex-col gap-y-1 w-full "
				>
					<span className="after:content-['*'] after:text-secondary text-slate-100 font-medium text-xs">
						Enter name
					</span>
					<input
						type="text"
						name="name"
						required
						onChange={(e) => handleChange(e)}
						placeholder="John Doe"
						value={userData?.name}
						id="name"
						className="bg-white/5 focus:shadow focus:shadow-secondary p-2 outline-white/10 outline-offset-0 rounded lowercase focus:outline-secondary focus:outline-offset-0 focus:outline focus:ring-0 focus:border-0 focus:border-none focus:border-b-2 outline-none shadow-md"
					/>
				</label>

				<label
					htmlFor="email"
					className="flex flex-col gap-y-1 w-full "
				>
					<span className="after:content-['*'] after:text-secondary text-white/90 font-medium text-xs">
						Enter Email
					</span>
					<input
						type="email"
						name="email"
						required
						onChange={(e) => handleChange(e)}
						autoCorrect="off"
						value={userData?.email}
						placeholder="johndoe@example.com"
						id="email"
						className="bg-white/5 p-2  rounded lowercase focus:outline-secondary outline-white/10 outline-offset-0 focus:outline-offset-0 focus:outline focus:ring-0 focus:border-0 focus:border-none focus:border-b-2 outline-none shadow-md"
					/>
				</label>

				<div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
					<label
						htmlFor="prn"
						className="flex flex-col gap-y-1 w-full "
					>
						<span className="after:content-['*'] after:text-secondary text-white/90 font-medium text-xs">
							Enter your PRN
						</span>
						<input
							type="text"
							name="prn"
							required
							onChange={(e) => handleChange(e)}
							autoCorrect="off"
							placeholder="PES120[22/23]XXXXX"
							value={userData?.prn}
							id="prn"
							className="bg-white/5 p-2 outline-white/10 outline-offset-0 rounded uppercase focus:outline-secondary focus:outline-offset-0 focus:outline focus:ring-0 focus:border-0 focus:border-none focus:border-b-2 outline-none shadow-md"
							maxLength={13}
							minLength={13}
						/>
					</label>

					<label
						htmlFor="phone"
						className="flex flex-col gap-y-1 w-full"
					>
						<span className=" text-white/90 after:content-['*'] after:text-secondary font-medium text-xs">
							Enter your phone number
						</span>
						<input
							type="tel"
							id="phone"
							onChange={(e) => handleChange(e)}
							name="phone"
							value={userData?.phone}
							pattern="[0-9]{10}"
							minLength={10}
							maxLength={10}
							placeholder="94XXXXXXXX"
							className="bg-white/5 p-2 outline-white/10 outline-offset-0 rounded uppercase focus:outline-secondary focus:outline-offset-0 focus:outline focus:ring-0 focus:border-0 focus:border-none focus:border-b-2 outline-none shadow-md"
						/>
					</label>
				</div>

				<span className="text-white/90 font-medium -mb-5 after:content-['*'] after:text-secondary text-xs">
					Enter semester
				</span>
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-4 font-medium">
					{semesterOptions.map((option) => (
						<label
							key={option.id}
							htmlFor={option.htmlForLabel}
							className="radio-label text-xs focus:outline-secondary outline-white/10 focus:outline-offset-0 outline hover:bg-white/20 font-medium hover:shadow-lg bg-white/5 shadow-md cursor-pointer p-2 flex items-center justify-center rounded"
						>
							<span>{option.value}</span>
							<input
								type="radio"
								onChange={(e) => handleChange(e)}
								name={option.name}
								id={option.htmlForLabel}
								className="hidden"
								value={option.value}
							/>
						</label>
					))}
				</div>

				<span className="text-white/90 font-medium -mb-5 after:content-['*'] after:text-secondary text-xs">
					Enter course
				</span>
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-4 font-medium">
					{courseOptions.map((option) => (
						<label
							key={option.id}
							htmlFor={option.htmlForLabel}
							className="radio-label text-xs font-medium focus:outline-secondary outline outline-white/10 outline-offset-0 focus:outline hover:bg-white/20 hover:shadow-lg bg-white/5 shadow-md cursor-pointer p-2 flex items-center justify-center rounded"
						>
							<span>{option.value}</span>
							<input
								type="radio"
								onChange={(e) => handleChange(e)}
								name={option.name}
								id={option.htmlForLabel}
								className="hidden"
								value={option.value}
							/>
						</label>
					))}
				</div>

				<label
					htmlFor="bio"
					className="flex flex-col gap-y-1 w-full"
				>
					<span className="text-white/90 font-medium after:content-['*'] after:text-secondary text-xs">
						Tell something about youself
					</span>
					<textarea
						type="text"
						name="bio"
						rows={8}
						onChange={(e) => handleChange(e)}
						placeholder="Something about yourself"
						id="bio"
						className="bg-white/5 p-2 border-white/10 border-[1px]  rounded focus:outline-secondary focus:outline-offset-0 focus:outline focus:ring-0 focus:border-0 focus:border-none focus:border-b-2 outline-none shadow-md"
					/>
				</label>

				<p className="text-xxs font-medium before:content-['*']">
					Already registered for one domain, no need to register again
					just{' '}
					<button className="text-secondary font-medium">
						Choose another domain
					</button>
				</p>

				<div className="mt-8 flex items-center flex-col-reverse sm:flex-row justify-end gap-2 md:gap-3">
					{/* <button
            type="reset"
            onClick={()=>setUserData({})}
            className={`${
              loading ? "cursor-not-allowed bg-white/10" : "bg-white/5"
            } w-full p-2 uppercase font-semibold border-white/10 border-[1px] rounded focus:outline-secondary focus:outline-offset-0 focus:outline focus:ring-0 focus:border-0 focus:border-none focus:border-b-2 outline-none shadow-md`}
          >
            Reset
          </button> */}

					<button
						type="submit"
						disabled={loading}
						className={`${
							loading
								? 'cursor-not-allowed bg-secondary/90 border-secondary/90'
								: ' bg-secondary border-secondary '
						} w-full border-[1px] rounded font-medium tracking-wide text-sm px-3 py-1.5 flex items-center justify-center h-9 sm:h-full uppercase`}
					>
						{loading ? (
							<AiOutlineLoading3Quarters className="animate-spin ease-in-out" />
						) : (
							'Register'
						)}
					</button>
				</div>
			</form>
		</>
	);
};

export default Form;
