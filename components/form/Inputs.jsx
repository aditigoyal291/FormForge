import React from 'react';

export function TextInput({
	handleChange,
	name,
	question,
	id,
	placeholder,
	required,
}) {
	return (
		<label
			htmlFor={name}
			className="flex flex-col gap-y-1 w-full"
		>
			<span
				className={`${"after:content-[\'*\'] after:text-secondary"} text-foreground-muted font-medium text-xs`}
			>
				{question}
			</span>
			<div className="flex flex-col gap-4  w-full">
				<input
					type="text"
					required={required}
					onChange={(e) => handleChange(e)}
					placeholder={placeholder}
					className="bg-foreground/5 p-2 border-foreground/10 border-[1px] rounded-md lowercase focus:outline-secondary focus:outline-offset-0 focus:outline focus:ring-0 focus:border-0 focus:border-none focus:border-b-2 outline-none shadow-md"
					id={name}
					name={name}
				/>
			</div>
		</label>
	);
}

export function RadioInput({
	handleChange,
	name,
	question,
	id,
	options,
	required,
}) {
	return (
		<>
			<span
				className={`text-foreground/90 font-medium -mb-5 ${
					required && "after:content-[\'*\'] after:text-secondary"
				}`}
			>
				{question}
			</span>
			<div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-4 font-medium">
				{options.map((option) => (
					<label
						key={option.id}
						htmlFor={option.htmlForLabel}
						className="radio-label border-foreground/10 border-[1px]  hover:bg-foreground/20 font-medium hover:shadow-lg bg-foreground/5 shadow-md cursor-pointer p-2 flex items-center justify-center rounded-md"
					>
						<span>{option.value}</span>
						<input
							type="radio"
							onChange={(e) => handleChange(e)}
							name={name}
							id={option.htmlForLabel}
							required={required}
							className="hidden"
							value={option.value}
						/>
					</label>
				))}
			</div>
		</>
	);
}

export function EmailInput({
	handleChange,
	name,
	question,
	id,
	placeholder,
	required,
}) {
	return (
		<label
			htmlFor={name}
			className="flex flex-col gap-y-1 w-full"
		>
			<span
				className={`${
					required && "after:content-[\'*\'] after:text-secondary"
				} text-foreground-muted font-medium text-xs`}
			>
				{question}
			</span>
			<div className="flex flex-col gap-4  w-full">
				<input
					type="text"
					required={required}
					onChange={(e) => handleChange(e)}
					placeholder={placeholder}
					className="bg-foreground/5 p-2 border-foreground/10 border-[1px]  rounded-md lowercase focus:outline-secondary focus:outline-offset-0 focus:outline focus:ring-0 focus:border-0 focus:border-none focus:border-b-2 outline-none shadow-md"
					id={name}
					name={name}
				/>
			</div>
		</label>
	);
}

export function CheckboxInput({
	handleChange,
	name,
	question,
	id,
	options,
	required,
}) {
	return (
		<>
			<span
				className={`text-foreground/90 font-medium -mb-5  ${
					required && "after:content-[\'*\'] after:text-secondary"
				}`}
			>
				{question}
			</span>
			<div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-4 font-medium">
				{options.map((option) => (
					<label
						key={option.id}
						htmlFor={option.htmlForLabel}
						className="radio-label border-foreground/10 border-[1px] hover:bg-foreground/20 font-medium hover:shadow-lg bg-foreground/5 shadow-md cursor-pointer p-2 flex items-center justify-center rounded-md"
					>
						<span>{option.value}</span>
						<input
							type="checkbox"
							onChange={(e) => handleChange(e)}
							name={name}
							id={option.htmlForLabel}
							required={required}
							className="hidden"
							value={option.value}
						/>
					</label>
				))}
			</div>
		</>
	);
}

export function RangeInput({
	handleChange,
	name,
	question,
	id,
	placeholder,
	required,
	min = '0',
	max = '10',
	step = '1',
}) {
	return (
		<label
			htmlFor={name}
			className="flex flex-col gap-y-1 w-full"
		>
			<span
				className={`${
					required && "after:content-[\'*\'] after:text-secondary"
				} text-foreground-muted font-medium text-xs}`}
			>
				{question}
			</span>
			<div className="flex flex-col gap-4 w-full">
				<input
					type="range"
					min={min}
					max={max}
					step={step}
					required={required}
					onChange={(e) => handleChange(e)}
					placeholder={placeholder}
					className="bg-foreground/5 p-2 border-foreground/10 border-[1px]  rounded-md lowercase  focus:outline focus:ring-0 focus:border-0 focus:border-none focus:border-b-2 outline-none shadow-md"
					id={name}
					name={name}
				/>
			</div>
		</label>
	);
}

export function TextAreaInput({
	handleChange,
	name,
	question,
	id,
	required,
	placeholder,
}) {
	return (
		<label
			htmlFor={name}
			className="flex flex-col gap-y-1 w-full"
		>
			<span
				className={`${
					required && "after:content-[\'*\'] after:text-secondary"
				} text-foreground-muted font-medium text-xs`}
			>
				{question}
			</span>
			<div className="flex flex-col gap-4 w-full">
				<textarea
					placeholder={placeholder}
					onChange={(e) => handleChange(e)}
					className="bg-foreground/5 p-2 border-foreground/10 border-[1px]  rounded-md lowercase focus:outline-secondary focus:outline-offset-0 focus:outline focus:ring-0 focus:border-0 focus:border-none focus:border-b-2 outline-none shadow-md"
					id={name}
					name={name}
					required={required}
				/>
			</div>
		</label>
	);
}

export function TelInput({
	handleChange,
	name,
	question,
	id,
	required,
	placeholder,
	pattern,
}) {
	return (
		<label
			htmlFor="phone"
			className="flex flex-col gap-y-1 w-full"
		>
			<span
				className={`${
					required && "after:content-['*'] after:text-secondar"
				} text-foreground/90 y font-medium`}
			>
				{question}
			</span>
			<input
				type="tel"
				id={name}
				required={required}
				onChange={(e) => handleChange(e)}
				name="phone"
				// value={userData?.phone}
				pattern={pattern}
				minLength={10}
				maxLength={10}
				placeholder={placeholder}
				className="bg-foreground/5 p-2 border-foreground/10 border-[1px] rounded-md focus:outline-secondary focus:outline-offset-0 focus:outline focus:ring-0 focus:border-0 focus:border-none focus:border-b-2 outline-none shadow-md"
			/>
		</label>
	);
}

export function SelectInput() {
	return <div>Select Input</div>;
}
