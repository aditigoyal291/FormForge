import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import ToggleThemeButton from './ToggleThemeButton';

const Navbar = () => {
	return (
		<div className="text-foreground flex justify-between xl:mx-28">
			<Link href="/" className="p-4 flex gap-x-1.5 sm:gap-2 items-center font-medium ">
				Form Forge
				<span className="text-xxs rounded px-1.5  bg-cyan-2 text-secondary border-secondary border-[1px] inline-flex items-center justify-center font-medium">
					Beta
				</span>
			</Link>
			<div className="flex text-xs sm:text-sm p-4 gap-2 md:gap-4 text-foreground-muted items-center">
				<Link href="/">Docs</Link>
				<Link className="hidden sm:visible" href="/">Examples</Link>
				<Link href="https://github.com/aditigoyal291/Form">
					<FaGithub className="text-xl ml-3" />
				</Link>
				<ToggleThemeButton />
			</div>
		</div>
	);
};

export default Navbar;
