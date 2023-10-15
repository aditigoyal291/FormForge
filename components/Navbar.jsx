import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="text-white mx-20 mt-4 flex  justify-between ">
      <div className="p-4 flex gap-2 items-center">
        Forms
        <span className="text-xs rounded text-primary border-[1px] border-opacity-10 border-primary px-1 p-px">
          Beta
        </span>
      </div>
      <div className="flex text-sm gap-4 text-text-secondary items-center">
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
