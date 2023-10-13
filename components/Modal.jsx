import React, { useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import Message from './Message';
// import Form from "./Form";
// import { Button } from "../Button";
const Modal = ({
	setUserData,
	userData,
	setModelIsOpen,
	handleChange,
	setPage,
}) => {
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState({
		display: false,
		message: '',
		description: '',
		type: '',
	});

	function handleCrossClick() {
		setModelIsOpen(false);
		setUserData({});
	}

	async function handleSubmit(e) {
		e.preventDefault();
		setLoading(true);
		try {
			const res = await fetch('/api/retrieve', {
				method: 'POST',
				body: JSON.stringify(userData),
			});
			const data = await res.json();
			if (data === null) {
				console.log('user does not exist');
				return;
			}
			const { name, email, prn, phone, semester, course, bio } =
				data.existing;
			setUserData({ name, email, prn, phone, semester, course, bio });
			setMessage({
				display: true,
				message: 'Login Successful',
				description:
					'Now you may continue to reigster for other domains',
				type: 'success',
			});
			setTimeout(() => {
				setMessage({ display: false });
				setModelIsOpen(false);
				setPage(2);
			}, 3000);
		} catch (error) {
			setMessage({
				display: true,
				message: "PRN and Email doesn't match",
				description: 'Check your email and prn once again',
				type: 'warn',
			});
			setTimeout(() => {
				setMessage({ display: false });
				setModelIsOpen(false);

			}, 3000);
		} finally {
			setLoading(false);
		}
	}

	return (
		<>
			<div className="text-white fixed z-50 md:p-10 bg-background/50 backdrop-blur-2xl flex justify-center items-center flex-col gap-7 h-full w-full ">
				<div className="relative w-full md:max-w-lg bg-shaded outline-white/10 backdrop-blur-2xl outline p-5 rounded justify-center flex flex-col gap-2">
					<button
						onClick={handleCrossClick}
						className="absolute right-3 p-1 rounded top-3 hover:bg-slate-900/90 w-6 h-6 flex items-center justify-center"
					>
						<RxCross1 className="" />
					</button>
					<div className="my-5 relative">
						<h1 className="text-lg font-semibold text-secondary">
							Sign In
						</h1>
						<p className="text-xs">
							Sign in will only work if you have registered for 1
							domain
							{/* <span className="font-mono bg-slate-800">name</span> */}
						</p>
					</div>
					<Message
						type={message.type}
						message={message.message}
						display={message.display}
					>
						{message.description}
					</Message>
					{/* {message.display && (
						<div
							className={`${
								message.type === 'success'
									? 'border-teal-500 bg-teal-300/80 text-teal-900'
									: message.type === 'warn'
									? 'bg-yellow-200 border-yellow-600 text-yellow-950'
									: 'bg-blue-300/80 border-blue-500 text-blue-950'
							} border-[1px] text-xs p-2 rounded`}
						>
							<h2>{message.message}</h2>
							<p className="text-xxs">{message.description}</p>
						</div> 
					)}
						*/}
					<div className="rounded-md flex items-center justify-center  w-full">
						<form
							// action=""
							onSubmit={(e) => handleSubmit(e)}
							className="w-full flex gap-y-5 flex-col accent-secondary text-xs"
						>
							<label
								htmlFor="name"
								className="space-y-1"
							>
								<span className="block after:content-['*'] after:text-secondary text-slate-100 font-medium text-xs">
									Enter your Name
								</span>
								<input
									onChange={(e) => handleChange(e)}
									type="text"
									placeholder="John Doe"
									className="w-full bg-white/5 focus:shadow focus:shadow-secondary p-2 outline-white/10 outline-offset-0 rounded lowercase focus:outline-secondary focus:outline-offset-0 focus:outline focus:ring-0 focus:border-0 focus:border-none focus:border-b-2 outline-none shadow-md"
									id="name"
									name="name"
									required
									disabled={loading}
								/>
							</label>
							<label
								htmlFor="email"
								className="space-y-1"
							>
								<span className="block after:content-['*'] after:text-secondary text-slate-100 font-medium text-xs">
									Enter your Email
								</span>
								<input
									type="email"
									onChange={(e) => handleChange(e)}
									placeholder="johndoe@example.com"
									className="w-full bg-white/5 focus:shadow focus:shadow-secondary p-2 outline-white/10 outline-offset-0 rounded lowercase focus:outline-secondary focus:outline-offset-0 focus:outline focus:ring-0 focus:border-0 focus:border-none focus:border-b-2 outline-none shadow-md"
									id="email"
									name="email"
									required
									disabled={loading}
								/>
							</label>
							<label
								htmlFor="prn"
								className="space-y-1"
							>
								<span className="block after:content-['*'] after:text-secondary text-slate-100 font-medium text-xs">
									Enter your PRN
								</span>
								<input
									type="text"
									onChange={(e) => handleChange(e)}
									placeholder="PES1202[2/3]XXXXX"
									className="w-full bg-white/5 focus:shadow focus:shadow-secondary p-2 outline-white/10 outline-offset-0 rounded uppercase focus:outline-secondary focus:outline-offset-0 focus:outline focus:ring-0 focus:border-0 focus:border-none focus:border-b-2 outline-none shadow-md"
									id="prn"
									name="prn"
									disabled={loading}
									required
								/>
							</label>
							<div className="flex justify-between w-full gap-3 mt-5">
								{/* <button
									type="reset"
									className=" bg-white/20 uppercase p-3 py-1.5 w-full rounded text-sm"
								>
									Reset
								</button> */}
								<button
									type="submit"
									className="flex justify-center items-center bg-secondary p-3 uppercase py-1.5 w-full rounded text-sm"
								>
									{loading ? (
										<AiOutlineLoading3Quarters className="animate-spin ease-in-out" />
									) : (
										'Sign In'
									)}
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			{/* </div> */}
		</>
	);
};

export default Modal;
