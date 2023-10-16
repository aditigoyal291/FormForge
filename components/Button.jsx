import Link from 'next/link';
import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Button = ({
	variant = 'primary',
	loading = false,
	size = 'default',
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
						? 'bg-red-500'
						: 'bg-secondary border-secondary'
				} ${loading ? 'cursor-not-allowed' : ''} ${
					size === 'icon'
						? 'h-10 w-10 p-2'
						: 'w-full px-3 py-1.5 h-9 sm:h-full '
				} outline-none shadow-md focus:outline-offset-0 focus:outline focus:ring-0 focus:border-0 focus:border-none w-full border-[1px] rounded-md font-medium tracking-wide text-sm flex items-center justify-center uppercase ${className} `}
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
					? 'bg-foreground/5 hover:bg-foreground/10 border-foreground/10 focus:outline-secondary focus:outline shadow-sm border-[1px] backdrop-blur'
					: variant === 'plain'
					? 'bg-foreground text-background hover:bg-foreground-muted outline outline-foreground/10 shadow-md border-[1px]'
					: variant === 'ghost'
					? 'bg-transparent hover:bg-modal-background/10 hover:text-foreground focus:outline-foreground/20 '
					: 'bg-secondary border-secondary shadow-md border-[1px]'
			} ${loading ? 'cursor-not-allowed' : ''} ${
				size === 'icon'
					? 'h-8 w-8 p-1.5'
					: 'w-full px-3 py-1.5 h-9 sm:h-full '
			} outline-none focus:outline-offset-0 focus:ring-0 focus:border-0 focus:border-none w-full rounded-md font-medium tracking-wide text-sm flex items-center justify-center uppercase ${className} `}
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
