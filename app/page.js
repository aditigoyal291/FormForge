import Link from "next/link";
import React from "react";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
const page = () => {
  return (
    <div className="text-white min-h-screen flex items-center justify-center flex-col gap-5">
      <div className="rounded-full bg-gradient-to-r from-green-700 via-green-500  via-yellow-500 via-orange-400 via-pink-400 to-indigo-800 p-px mb-5">
        <div className="flex  items-center  bg-background  gap-2  rounded-full py-1 px-3">
          <p className="text-sm text-white font-normal">Exclusively for PESU</p>
          <span>
            <AiOutlineRight className="text-[8px]" />
          </span>
        </div>
      </div>
      <div className="w-full flex justify-center flex-col items-center gap-2 bg-gradient-to-br from-white text-transparent bg-clip-text font-semibold">
        <span className="text-5xl">Forms For</span>
        <p className="text-5xl">Developers</p>
      </div>
      <div className="flex flex-col gap-8 items-center  w-fit ">
        <p className="text-text-primary  text-lg ">
          The most reusable form you&apos;ll ever find xD
        </p>
        <div className="flex justify-center gap-3 w-full">
          <Link href="https://github.com/aditigoyal291/Form" className="w-full">
            <div className="bg-gradient-to-r from-foreground-muted/60 via-foreground/60 to-foreground-muted/90 p-px rounded-2xl">
              <button className="bg-background px-6  rounded-2xl w-full  text-background py-3  flex justify-center gap-x-3">
                <p className="font-semibold text-text-primary ">Github</p>
                <span>
                  <FaGithub className="inline text-text-primary" />
                </span>
              </button>
              
            </div>
          </Link>
          <Link href="/registration" className="w-full">
            <button className="bg-foreground px-6  rounded-2xl w-full  text-black py-3 hover:bg-text-primary flex justify-center gap-x-3">
              <p className="font-semibold ">Register</p>
              <span>
                <AiOutlineRight className="inline text-xs" />
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-[10rem]  w-full flex justify-center items-center gap-2">
        <p className="text-sm text-text-secondary">Created by</p>
        <span>
          <Link href="https://github.com/aditigoyal291">
            <span className="flex items-center gap-1">
              <Image
                src="/aditi-github-pic.png"
                width={25}
                height={25}
                alt="aditi github profile pic"
                className="rounded-full"
              />
              <p className="text-xs">Aditi Goyal</p>
            </span>
          </Link>
        </span>
        <p className="text-sm text-text-secondary">and</p>
        <span>
          <Link href="https://github.com/SarangKumar/">
            <span className="flex items-center gap-1">
              <Image
                src="/sarang-github-pic.png"
                width={30}
                height={30}
                alt="aditi github profile pic"
                className="rounded-full "
              />
              <p className="text-xs">Sarang Kumar</p>
            </span>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default page;
