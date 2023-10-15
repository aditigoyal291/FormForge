import Link from "next/link";
import React from "react";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import Navbar from "../components/Navbar";
const page = () => {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <div className="text-white flex items-center justify-center flex-col gap-5 ">
          <div className="rounded-full bg-gradient-to-r from-green-700 via-green-500  via-yellow-500 via-orange-400 via-pink-400 to-indigo-800 p-px mb-5">
            <div className="flex  items-center  bg-background  gap-2  rounded-full py-1 px-3">
              <p className="text-sm text-white font-normal">
                Exclusively for PESU
              </p>
              <span>
                <AiOutlineRight className="text-[8px]" />
              </span>
            </div>
          </div>
          <div className="w-full flex justify-center flex-col items-center  bg-gradient-to-br from-white text-transparent bg-clip-text font-bold ">
            <span className="before:bg-shine relative mb-8 !text-white/80 before:absolute before:left-0 before:top-0 before:w-full before:animate-[shine_2s_ease-in-out] before:bg-[length:200%] before:bg-clip-text before:text-transparent before:content-['The_next_generation_of_writing_emails']  text-[38px] leading-[10px] md:text-[70px] md:leading-[40px] tracking-[-1.024px;] text-slate-12 font-bold ">
              Forms For
            </span>
            <p className="before:bg-shine relative mb-8 !text-white/80 before:absolute before:left-0 before:top-0 before:w-full before:animate-[shine_2s_ease-in-out] before:bg-[length:200%] before:bg-clip-text before:text-transparent before:content-['The_next_generation_of_writing_emails']  text-[38px] leading-[10px] md:text-[70px] md:leading-[40px] tracking-[-1.024px;] text-slate-12 font-bold">
              Developers
            </p>
          </div>
          <div className="flex flex-col gap-8 items-center  w-fit ">
            <p className="text-text-primary  text-lg ">
              The most reusable form you&apos;ll ever find xD
            </p>
            <div className="flex justify-center gap-3 w-full">
              <Link
                href="https://github.com/aditigoyal291/Form"
                className="w-full"
              >
                <div className="bg-gradient-to-r from-foreground-muted/60 via-foreground/60 to-foreground-muted/90 p-px rounded-2xl">
                  <button className="bg-background px-6  rounded-xl w-full  text-background py-2  flex justify-center gap-x-3">
                    <p className="font-semibold text-text-primary ">Github</p>
                    <span>
                      <FaGithub className="inline text-text-primary" />
                    </span>
                  </button>
                </div>
              </Link>
              <Link href="/registration" className="w-full">
                <button className="bg-foreground px-6  rounded-xl w-full  text-black py-2 hover:bg-text-primary flex justify-center gap-x-3">
                  <p className="font-semibold ">Register</p>
                  <span>
                    <AiOutlineRight className="inline text-xs" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="mt-[13rem]  w-full flex justify-center items-center gap-2">
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
      </div>
    </>
  );
};

export default page;
