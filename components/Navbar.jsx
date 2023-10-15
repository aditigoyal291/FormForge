import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
		<div className="text-white flex justify-between xl:mx-28">
			<div className="p-4 flex gap-2 items-center">
				Forms
				{/* <span className="text-xs rounded text-primary border-[1px] border-opacity-10 border-primary px-1 p-px"> */}
				<span className="text-xs rounded px-1.5 py-0.5 bg-cyan-2 text-secondary border-secondary border-2 inline-flex items-center justify-center font-medium">
					Beta
				</span>
			</div>
			<div className="flex text-sm p-4 gap-3 text-foreground-muted items-center">
				<a href="/">Docs</a>
				<a href="/">Examples</a>
				<Link href="https://github.com/aditigoyal291/Form">
					<FaGithub className="text-xl ml-3" />
				</Link>
			</div>
		</div>
  );
};

export default Navbar;
