import Link from 'next/link';
import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Button = ({
	variant = 'primary',
	loading = false,
	className,
	children,
	handleClick,
	href,
	...props
}) => {
	if (href) {
		return (
			<Link
				{...props}
				href={href}
				// disable ={loading}
				onClick={handleClick}
				className={`${
					variant === 'mute'
						? 'bg-foreground/5 hover:bg-foreground/10 border-foreground/10 border focus:outline-secondary '
						: variant === 'plain'
						? 'bg-foreground text-background hover:bg-foreground-muted outline outline-foreground/10'
						: variant === 'ghost'
						? ''
						: 'bg-secondary border-secondary'
				} ${
					loading ? 'cursor-not-allowed' : ''
				} outline-none shadow-md focus:outline-offset-0 focus:outline focus:ring-0 focus:border-0 focus:border-none w-full border-[1px] rounded-md font-medium tracking-wide text-sm px-3 py-1.5 flex items-center justify-center h-9 sm:h-full uppercase ${className} `}
			>
				{loading ? (
					<AiOutlineLoading3Quarters className="animate-spin ease-in-out" />
				) : (
					children
				)}
			</Link>
		);
	}
	return (
		<button
			{...props}
			href={href}
			// disable ={loading}
			onClick={handleClick}
			className={`${
				variant === 'mute'
					? 'bg-foreground/5 hover:bg-foreground/10 border-foreground/10 border focus:outline-secondary outline-offset-0'
					: variant === 'plain'
					? 'bg-foreground text-background hover:bg-foreground-muted outline outline-foreground/10'
					: variant === 'ghost'
					? ''
					: 'bg-secondary border-secondary focus:ring-secondary focus:ring-1 ring-offset-1 outline-offset-1'
			} ${
				loading ? 'cursor-not-allowed bg-opacity-10' : ''
			} outline-none shadow-md focus:outline focus:border-0 focus:border-none w-full border-[1px] rounded-md font-medium tracking-wide text-sm px-3 py-1.5 flex items-center justify-center h-9 sm:h-full uppercase ${className} `}
		>
			{loading ? (
				<AiOutlineLoading3Quarters className="animate-spin ease-in-out" />
			) : (
				children
			)}
		</button>
	);
};

export default Button;
