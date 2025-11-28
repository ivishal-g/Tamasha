"use client";

import { GithubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-white rounded-xl 
        px-[1.8rem] py-4 mt-2 border-b ml-[3.4rem] mr-[3.4rem] ">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        <Image
            src="/logo.svg"
            alt="logo"
            width={200}
            height={200}
            className="hidden md:block"
          />
<div className="group cursor-pointer transition">
  <Link
    href="https://github.com"
    className="flex items-center gap-2"
  >
    <div
      className="
        flex items-center gap-2
        border-2 border-black 
        px-3 py-1.5 rounded-lg
        font-extrabold text-lg
        text-black bg-white
        transition-all duration-200
        group-hover:bg-black group-hover:text-white
      "
    >
      <GithubIcon
        size={26}
        className="transition-colors group-hover:text-white"
      />
      <span>GITHUB</span>
    </div>
  </Link>
</div>
      </div>
    </header>
  );
}