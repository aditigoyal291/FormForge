import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import ToggleThemeButton from './ToggleThemeButton';

const Navbar = () => {
	return (
		<div className="text-foreground flex justify-between xl:mx-28">
			<Link href="/" className="p-4 flex gap-1 sm:gap-2 items-center">
				Form Forge
				<span className="text-xs rounded px-1.5 py-0.5 bg-cyan-2 text-secondary border-secondary border-[1.5px] inline-flex items-center justify-center font-medium">
					Beta
				</span>
			</Link>
			<div className="flex text-xs sm:text-sm p-4 gap-2 md:gap-4 text-foreground-muted items-center">
				<Link href="/">Docs</Link>
				<Link href="/">Examples</Link>
				<Link href="https://github.com/aditigoyal291/Form">
					<FaGithub className="text-xl ml-3" />
				</Link>
				<ToggleThemeButton />
			</div>
		</div>
	);
};

export default Navbar;
