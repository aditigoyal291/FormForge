import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="text-white min-h-screen flex items-center justify-center">
      <Link href="/registration">
        <button className="border p-2 px-3 rounded border-white/50 hover:bg-white/10">
          Register
        </button>
      </Link>
    </div>
  );
};

export default page;
