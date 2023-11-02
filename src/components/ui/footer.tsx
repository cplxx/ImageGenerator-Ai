import { navItems } from "@/data/navigation";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="mt-8 ">
      <div className="mb-5 flex justify-between items-center">
        <div>
          <Link href={"/"}>
            <h1 className="text-3xl font-Inter cursor-pointer">
              <span className="text-[#64ff4c]">Image</span>AI
            </h1>
          </Link>
        </div>
        <div>
          <ul className="flex items-center flex-wrap">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-[16px] text-[#b1b0b6] font-Inter font-[500] duration-200 transition px-4 hover:text-[#64ff4b]"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-[18px] font-[400] text-[#b1b0b6] font-Inter text-center">
        Copyright 2023 ImageAi . All Rights Reserved
      </p>
      <br />
      <br />
    </footer>
  );
};

export default Footer;
