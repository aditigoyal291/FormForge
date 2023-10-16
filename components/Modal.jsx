import React, { useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import Message from './Message';
import Button from './Button';

const Modal = ({
	setUserData,
	userData,
	setModelIsOpen,
	handleChange,
	setPage,
	modelIsOpen,
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
	}

	async function handleSubmit(e) {
		e.preventDefault();
		setLoading(true);

		try {
			const tempData = {
				prn: userData.prn.toLowerCase(),
				email: userData.email.toLowerCase(),
			};

			setUserData(tempData);

			const res = await fetch('/api/retrieve', {
				method: 'POST',
				body: JSON.stringify(tempData),
			});
			const data = await res.json();
			console.log(data);

			setMessage({
				display: true,
				message: data.message,
				description: data.description,
				type: data.type,
			});
			if (data.code === 2) {
				// console.log(data.existing);
				const {
					name,
					email,
					prn,
					phone,
					semester,
					course,
					bio,
					// registeredDomains,
				} = data.existing;
				setUserData({
					name,
					email,
					prn,
					phone,
					semester,
					course,
					bio,
					// registeredDomains,
				});

				setTimeout(() => {
					setModelIsOpen(false);
					setPage(2);
				}, 3000);
			}
		} catch (error) {
			setMessage({
				display: true,
				message: error,
				description: error.message,
				type: 'error',
			});
			console.log(error);
		} finally {
			setLoading(false);
			setTimeout(() => {
				setMessage({ display: false });
			}, 3000);
		}
	}

	if (!modelIsOpen) {
		return null;
	}
	// const condition = false;
	return (
		<>
			<div className="text-foreground fixed z-50 md:p-10 bg-background/50 backdrop-blur-2xl flex justify-center items-center flex-col gap-7 h-full w-full ">
				<div className="relative w-full md:max-w-lg bg-modal-background outline-foreground/10 backdrop-blur-2xl outline p-5 rounded-md justify-center flex flex-col gap-y-4">
					<button
						onClick={handleCrossClick}
						className="absolute right-3 p-1 rounded-md top-3 hover:bg-slate-900/90 w-6 h-6 flex items-center justify-center"
					>
						<RxCross1 className="" />
					</button>
					<div className="relative">
						<h1 className="text-lg font-semibold text-secondary">
							Log In
						</h1>
						<p className="text-xs">
							Login will only work if you are registered.
						</p>
					</div>
					<Message
						type={message.type}
						message={message.message}
						display={message.display}
					>
						{message.description}
					</Message>

					<div className="rounded-lg flex items-center justify-center  w-full">
						<form
							// action=""
							onSubmit={(e) => handleSubmit(e)}
							className="w-full flex gap-y-5 flex-col accent-secondary text-xs"
						>
							{/* <label
								htmlFor="name"
								className="space-y-1"
							>
								<span
									className={`block after:content-[\'*\'] after:text-secondary text-slate-100 font-medium text-xs`}
								>
									Enter your Name
								</span>
								<input
									onChange={(e) => handleChange(e)}
									type="text"
									placeholder="John Doe"
									className="w-full bg-foreground/5 focus:shadow focus:shadow-secondary p-2 outline-foreground/10 outline-offset-0 rounded-md lowercase focus:outline-secondary focus:outline-offset-0 focus:outline focus:ring-0 focus:border-0 focus:border-none focus:border-b-2 outline-none shadow-md"
									value={userData?.name}
									id="name"
									name="name"
									required
									disabled={loading}
								/>
							</label> */}
							<label
								htmlFor="email"
								className="space-y-1"
							>
								<span
									className={`block after:content-[\'*\'] after:text-secondary text-slate-100 font-medium text-xs`}
								>
									Enter your Email
								</span>
								<input
									type="email"
									onChange={(e) => handleChange(e)}
									placeholder="johndoe@example.com"
									className="w-full bg-foreground/5 focus:shadow focus:shadow-secondary p-2 outline-foreground/10 outline-offset-0 rounded-md lowercase focus:outline-secondary focus:outline-offset-0 focus:outline focus:ring-0 focus:border-0 focus:border-none focus:border-b-2 outline-none shadow-md"
									id="email"
									name="email"
									required
									value={userData?.email}
									disabled={loading}
								/>
							</label>
							<label
								htmlFor="prn"
								className="space-y-1"
							>
								<span
									className={`block after:content-[\'*\'] after:text-secondary text-slate-100 font-medium text-xs`}
								>
									Enter your PRN
								</span>
								<input
									type="text"
									onChange={(e) => handleChange(e)}
									placeholder="PES1202[2/3]XXXXX"
									className="w-full bg-foreground/5 focus:shadow focus:shadow-secondary p-2 outline-foreground/10 outline-offset-0 rounded-md uppercase focus:outline-secondary focus:outline-offset-0 focus:outline focus:ring-0 focus:border-0 focus:border-none focus:border-b-2 outline-none shadow-md"
									id="prn"
									name="prn"
									autoCorrect="off"
									value={userData?.prn}
									maxLength={13}
									minLength={13}
									disabled={loading}
									required
								/>
							</label>
							<div className="flex justify-between w-full gap-3 mt-5">
								<Button
									type="submit"
									loading={loading}
								>
									Log in
								</Button>
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
