"use client";

import Link from "next/link";
import React, { useState } from "react";
import Navigation from "./Navigation";
import { MenuIcon, SearchIcon, User } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";

type Props = {
  activeItem: number;
};

const Header = ({ activeItem }: Props) => {
  return (
    <div className="w-full p-5 border-b min-h-[60px] boder-b-[#ffffff32]  bg-black  ">
      <div className="hidden md:w-[90%] mx-auto md:flex items-center justify-between">
        <div>
          <Link href={"/"}>
            <h1 className="text-3xl font-Inter cursor-pointer">
              <span className="text-[#64ff4c]">Image</span>AI
            </h1>
          </Link>
        </div>
        <div className="flex">
          <Navigation activeItem={activeItem} />
        </div>
        <div className="flex items-center ml-10">
          <SearchIcon className="text-[25px] mr-5 cursor-pointer" />
          <Link href={"/sign-in"}>
            <User className="text-[25px] mr-5 cursor-pointer" />
          </Link>
        </div>
      </div>
      <div className="w-full md:hidden flex items-center justify-between">
        <Link href="/">
          <h1 className="text-3xl font-Inter cursor-pointer">
            <span className="text-[#64ff4c]">Imagi</span>AI
          </h1>
        </Link>
        <Sheet>
          <SheetTrigger>
            <MenuIcon className="text-[25px]" />
          </SheetTrigger>
          <SheetContent>
            <Navigation activeItem={activeItem} />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
