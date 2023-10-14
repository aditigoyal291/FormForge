import React, { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
// import Modal from '../Modal';
import Message from "../Message";
import Modal from "../Modal";

const semesterOptions = [
  {
    id: 1,
    htmlForLabel: "semester1",
    value: 1,
    name: "semester",
  },
  {
    id: 2,
    htmlForLabel: "semester2",
    value: 2,
    name: "semester",
  },
  {
    id: 3,
    htmlForLabel: "semester3",
    value: 3,
    name: "semester",
  },
  {
    id: 4,
    htmlForLabel: "semester4",
    value: 4,
    name: "semester",
  },
];

const courseOptions = [
  {
    id: 1,
    htmlForLabel: "course1",
    value: "B.Tech CSE",
    name: "course",
  },
  {
    id: 2,
    htmlForLabel: "course2",
    value: "B.Tech EEE",
    name: "course",
  },
  {
    id: 3,
    htmlForLabel: "course3",
    value: "B.Tech ECE",
    name: "course",
  },
  {
    id: 4,
    htmlForLabel: "course4",
    value: "M.Tech",
    name: "course",
  },
  {
    id: 5,
    htmlForLabel: "course5",
    value: "B.Design",
    name: "course",
  },
  {
    id: 6,
    htmlForLabel: "course6",
    value: "Psychology",
    name: "course",
  },
];

const Form = ({ setUserData, userData, setPage }) => {
  const [loading, setLoading] = useState(false);
  const [modelIsOpen, setModelIsOpen] = useState(false);
  const [message, setMessage] = useState({
    display: false,
    message: "",
    description: "",
    type: "",
  });

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

      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(userData),
      });
      const data = await res.json();

      localStorage.setItem("rookie", JSON.stringify(userData));
      console.log(data);

			setMessage({
				display: true,
				type: data.type,
				message: data.message,
				description: data.description,
			});

			if (data.code === 2) {
				// setUserData({...userData, registeredDomains: data.registeredDomains})
				setTimeout(() => setPage(2), 3000);
			}
		} catch (error) {
			console.log(error);
			setMessage({
				display: true,
				message: error,
				description: JSON.stringify(error.message),
				type: 'success',
			});
		} finally {
			setLoading(false);
			setTimeout(() => setMessage({ display: false }), 3000);
		}
	};

	return (
		<>
			<Modal
				setUserData={setUserData}
				userData={userData}
				setModelIsOpen={setModelIsOpen}
				handleChange={handleChange}
				setPage={setPage}
				modelIsOpen={modelIsOpen}
			/>
			<form
				onSubmit={(e) => handleRegistration(e)}
				className="text-foreground my-5 w-full flex flex-col gap-y-6 accent-secondary text-xs md:text-sm"
			>
				<h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-secondary via-secondary/80 to-primary animate-gradient font-semibold tracking-tight">
					NEXUS Registrations
				</h1>
				<label
					htmlFor="name"
					className="flex flex-col gap-y-1 w-full "
				>
					<span className="after:content-['*'] after:text-secondary text-foreground font-medium text-xs">
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
						className="bg-foreground/5 p-2  rounded-md lowercase focus:outline-secondary outline-foreground/10 outline-offset-0 focus:outline-offset-0 focus:outline focus:ring-0 focus:border-0 focus:border-none focus:border-b-2 outline-none shadow-md"
					/>
				</label>

				<label
					htmlFor="email"
					className="flex flex-col gap-y-1 w-full "
				>
					<span className="after:content-['*'] after:text-secondary text-foreground font-medium text-xs">
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
						className="bg-foreground/5 p-2  rounded-md lowercase focus:outline-secondary outline-foreground/10 outline-offset-0 focus:outline-offset-0 focus:outline focus:ring-0 focus:border-0 focus:border-none focus:border-b-2 outline-none shadow-md"
					/>
				</label>

				<div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
					<label
						htmlFor="prn"
						className="flex flex-col gap-y-1 w-full "
					>
						<span className="after:content-['*'] after:text-secondary text-foreground/90 font-medium text-xs">
							Enter your PRN
						</span>
						<input
							type="text"
							name="prn"
							required
							onChange={(e) => handleChange(e)}
							autoCorrect="off"
							placeholder="PES1202[2/3]XXXXX"
							value={userData?.prn}
							pattern="[pes/PES]1202[2/3][0-9]{4}"
							id="prn"
							className="bg-foreground/5 p-2 outline-foreground/10 outline-offset-0 rounded-md uppercase focus:outline-secondary focus:outline-offset-0 focus:outline focus:ring-0 focus:border-0 focus:border-none focus:border-b-2 outline-none shadow-md"
							maxLength={13}
							minLength={13}
						/>
					</label>

          <label htmlFor="phone" className="flex flex-col gap-y-1 w-full">
            <span className=" text-foreground/90 after:content-['*'] after:text-secondary font-medium text-xs">
              Enter your phone number
            </span>
            <input
              type="tel"
              id="phone"
              onChange={(e) => handleChange(e)}
              name="phone"
              value={userData?.phone}
              pattern="[6-9]{1}[0-9]{9}"
              minLength={10}
              maxLength={10}
              placeholder="94XXXXXXXX"
              className="bg-foreground/5 p-2 outline-foreground/10 outline-offset-0 rounded-md uppercase focus:outline-secondary focus:outline-offset-0 focus:outline focus:ring-0 focus:border-0 focus:border-none focus:border-b-2 outline-none shadow-md"
            />
          </label>
        </div>

        <span className="text-foreground/90 font-medium -mb-5 after:content-['*'] after:text-secondary text-xs">
          Enter semester
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-4 font-medium">
          {semesterOptions.map((option) => (
            <label
              key={option.id}
              htmlFor={option.htmlForLabel}
              className="radio-label text-xs focus:outline-secondary outline-foreground/10 focus:outline-offset-0 outline hover:bg-foreground/20 font-medium hover:shadow-lg bg-foreground/5 shadow-md cursor-pointer p-2 flex items-center justify-center rounded-md"
            >
              <span>{option.value}</span>
              <input
                type="radio"
                onChange={(e) => handleChange(e)}
                name={option.name}
                id={option.htmlForLabel}
                className="hidden"
                pattern="[1-4]{1}"
                value={option.value}
              />
            </label>
          ))}
        </div>

				<span className="text-foreground/90 font-medium -mb-5 after:content-['*'] after:text-secondary text-xs">
					Enter course
				</span>
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-4 font-medium">
					{courseOptions.map((option) => (
						<label
							key={option.id}
							htmlFor={option.htmlForLabel}
							className="radio-label text-xs font-medium focus:outline-secondary outline outline-foreground/10 outline-offset-0 focus:outline hover:bg-foreground/20 hover:shadow-lg bg-foreground/5 shadow-md cursor-pointer p-2 flex items-center justify-center rounded-md"
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
					<span className="text-foreground/90 font-medium after:content-['*'] after:text-secondary text-xs">
						Tell something about youself
					</span>
					<textarea
						type="text"
						name="bio"
						rows={8}
						onChange={(e) => handleChange(e)}
						placeholder="Something about yourself"
						id="bio"
						className=" bg-foreground/5 p-2 border-foreground/10 border-[1px]  rounded-md focus:outline-secondary focus:outline-offset-0 focus:outline focus:ring-0 focus:border-0 focus:border-none focus:border-b-2 outline-none shadow-md"
					/>
				</label>

        <p className="text-xs font-medium before:content-['*']">
          Already registered for one domain, no need to register again just{" "}
          <button
            type="button"
            onClick={() => setModelIsOpen(true)}
            className="text-secondary font-semibold"
          >
            Login
          </button>
        </p>

        <Message
          type={message.type}
          message={message.message}
          display={message.display}
        >
          {message.description}
        </Message>

				<div className="mt-8 flex items-center justify-center flex-col sm:flex-row gap-2 md:gap-3">
					<button
						type="button"
						onClick={() => setModelIsOpen(true)}
						className="w-full p-2 rounded-md uppercase font-medium tracking-wide text-sm px-3 py-1.5 flex items-center text-background bg-foreground justify-center outline outline-foreground/10"
					>
						Login
					</button>
					<button
						type="submit"
						disabled={loading}
						className={`${
							loading
								? 'cursor-not-allowed bg-secondary/90 border-secondary/90'
								: 'bg-secondary border-secondary '
						} w-full border-[1px] rounded-md font-medium tracking-wide text-sm px-3 py-1.5 flex items-center justify-center h-9 sm:h-full uppercase`}
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
