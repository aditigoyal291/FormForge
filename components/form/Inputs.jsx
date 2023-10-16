import React from 'react';

export function TextInput({
	placeholder,
	required = true,
	loading = false,
	pattern = '.*',
	validationStyle = false,
	handleChange,
	name,
	question,
	id,
	minLength,
	maxLength,
	...props
}) {
	console.log({
		placeholder,
		required: true,
		loading: false,
		pattern: '.*',
		validationStyle: false,
		handleChange,
		name,
		question,
		id,
		minLength,
		maxLength,
		...props,
	});
	return (
		<label
			htmlFor={name}
			className="flex flex-col gap-y-1 w-full"
		>
			<span
				className={`${"after:content-['*'] after:text-secondary"} text-foreground-muted font-medium text-xs`}
			>
				{question}
			</span>
			<div className="flex flex-col gap-4  w-full">
				<input
					{...props}
					type="text"
					pattern={pattern}
					required={required}
					minLength={minLength}
					disabled={loading}
					maxLength={maxLength}
					onChange={(e) => handleChange(e)}
					placeholder={placeholder}
					className={`${
						validationStyle &&
						'valid:outline-message-success-foreground invalid:outline-message-error-foreground'
					} bg-foreground/5 p-2 border-foreground/10 border-[1px] rounded-md lowercase focus:outline-secondary focus:outline-offset-0 focus:outline focus:ring-0 focus:border-0 focus:border-none focus:border-b-2 outline-none shadow-md`}
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
	loading = false,
	options,
	required = true,
	validationStyle = false,
}) {
	return (
		<>
			<span
				className={`text-foreground/90 font-medium -mb-5 ${
					required && "after:content-['*'] after:text-secondary"
				}`}
			>
				{question}
			</span>
			<div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-4 font-medium">
				{options.map((option) => (
					<label
						key={option.id}
						htmlFor={option.htmlForLabel}
						className={`${
							validationStyle &&
							'valid:outline-message-success-foreground invalid:outline-message-error-foreground'
						} radio-label border-foreground/10 border-[1px]  hover:bg-foreground/20 font-medium hover:shadow-lg bg-foreground/5 shadow-md cursor-pointer p-2 flex items-center justify-center rounded-md`}
					>
						<span>{option.value}</span>
						<input
							type="radio"
							onChange={(e) => handleChange(e)}
							name={name}
							disabled={loading}
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
	required = true,
	loading = false,
	validationStyle = false,
	handleChange,
	name,
	question,
	id,
	pattern,
	placeholder,
	...props
}) {
	return (
		<label
			htmlFor={name}
			className="flex flex-col gap-y-1 w-full"
		>
			<span
				className={`${
					required && "after:content-['*'] after:text-secondary"
				} text-foreground-muted font-medium text-xs`}
			>
				{question}
			</span>
			<div className="flex flex-col gap-4  w-full">
				<input
					{...props}
					type="text"
					required={required}
					pattern={pattern}
					disabled={loading}
					onChange={(e) => handleChange(e)}
					placeholder={placeholder}
					className={`${
						validationStyle &&
						'valid:outline-message-success-foreground invalid:outline-message-error-foreground'
					} bg-foreground/5 p-2 border-foreground/10 border-[1px]  rounded-md lowercase focus:outline-secondary focus:outline-offset-0 focus:outline focus:ring-0 focus:border-0 focus:border-none focus:border-b-2 outline-none shadow-md`}
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
	loading = false,
	id,
	options,
	required = true,
	validationStyle = false,
}) {
	return (
		<>
			<span
				className={`text-foreground/90 font-medium -mb-5  ${
					required && "after:content-['*'] after:text-secondary"
				}`}
			>
				{question}
			</span>
			<div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-4 font-medium">
				{options.map((option) => (
					<label
						key={option.id}
						disabled={loading}
						htmlFor={option.htmlForLabel}
						className={`${
							validationStyle &&
							'valid:outline-message-success-foreground invalid:outline-message-error-foreground'
						} radio-label border-foreground/10 border-[1px] hover:bg-foreground/20 font-medium hover:shadow-lg bg-foreground/5 shadow-md cursor-pointer p-2 flex items-center justify-center rounded-md`}
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
	loading = false,
	required = true,
	validationStyle = false,
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
					required && "after:content-['*'] after:text-secondary"
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
					disabled={loading}
					required={required}
					onChange={(e) => handleChange(e)}
					placeholder={placeholder}
					className={`${
						validationStyle &&
						'valid:outline-message-success-foreground invalid:outline-message-error-foreground'
					} bg-foreground/5 p-2 border-foreground/10 border-[1px]  rounded-md lowercase  focus:outline focus:ring-0 focus:border-0 focus:border-none focus:border-b-2 outline-none shadow-md`}
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
	loading = false,
	rows = 3,
	id,
	required = true,
	placeholder = '',
	validationStyle = false,
}) {
	return (
		<label
			htmlFor={name}
			className="flex flex-col gap-y-1 w-full"
		>
			<span
				className={`${
					required && "after:content-['*'] after:text-secondary"
				} text-foreground-muted font-medium text-xs`}
			>
				{question}
			</span>
			<div className="flex flex-col gap-4 w-full">
				<textarea
					rows={rows}
					placeholder={placeholder}
					disabled={loading}
					onChange={(e) => handleChange(e)}
					className={`${
						validationStyle &&
						'valid:outline-message-success-foreground invalid:outline-message-error-foreground'
					} bg-foreground/5 p-2 border-foreground/10 border-[1px]  rounded-md lowercase focus:outline-secondary focus:outline-offset-0 focus:outline focus:ring-0 focus:border-0 focus:border-none focus:border-b-2 outline-none shadow-md`}
					id={name}
					name={name}
					required={required}
				/>
			</div>
		</label>
	);
}

export function TelInput({
	required = true,
	validationStyle = false,
	pattern = '.*',
	loading = false,
	handleChange,
	name,
	question,
	id,
	placeholder,
}) {
	return (
		<label
			htmlFor="phone"
			className="flex flex-col gap-y-1 w-full"
		>
			<span
				className={`${
					required && "after:content-['*'] after:text-secondar"
				} text-foreground/90 font-medium`}
			>
				{question}
			</span>
			<input
				type="tel"
				id={name}
				required={required}
				onChange={(e) => handleChange(e)}
				name="phone"
				pattern={pattern}
				minLength={10}
				maxLength={10}
				disabled={loading}
				placeholder={placeholder}
				className={`${
					validationStyle &&
					'valid:outline-message-success-foreground invalid:outline-message-error-foreground'
				} bg-foreground/5 p-2 border-foreground/10 border-[1px] rounded-md focus:outline-secondary focus:outline-offset-0 focus:outline focus:ring-0 focus:border-0 focus:border-none focus:border-b-2 outline-none shadow-md`}
			/>
		</label>
	);
}

export function SelectInput() {
	return <div>Select Input</div>;
}
