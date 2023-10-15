import Link from "next/link";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const page = () => {
  return (
    <div className="text-white min-h-screen max-phone:max-h-full flex items-center justify-center flex-col gap-4 ">
      <div class=" flex items-center justify-center">
        <div class=" w-full rounded-full bg-gradient-to-r from-green-700 via-green-500  via-yellow-500 via-orange-400 via-pink-400 to-indigo-800 p-[1px]">
          <div class="flex h-full w-full items-center justify-center bg-background back gap-2  rounded-full py-1 px-3">
            <p class="text-sm text-white font-normal">Exclusively for PESU</p>
            <span>
              <AiOutlineRight className="text-[8px]" />
            </span>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center flex-col items-center gap-2 bg-gradient-to-br from-white text-transparent bg-clip-text font-semibold">
        <span className="text-5xl">Forms For</span>
        <p className="text-5xl">Developers</p>
      </div>
      <div className="flex flex-col gap-6 items-center  w-fit ">
        <p className="text-text-primary  text-lg ">
          The most reusable form you&apos;ll ever find xD
        </p>
        <Link href="/registration" className="w-full">
          <button className="bg-foreground px-6  rounded-full w-full  text-black py-3 hover:bg-text-primary flex justify-center gap-2">
            <p className="font-semibold ">Register</p>
            <span>
              <AiOutlineRight className="inline text-xs" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
