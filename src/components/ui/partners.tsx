import { partners } from "@/data/partners";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

type Props = {};

const Partners = (props: Props) => {
  return (
    <div className="py-10">
      <h1 className="text-4xl font-[700] font-Inter text-white text-center">
        Our Partner&apos;s
      </h1>
      <div className="w-full flex justify-center pr-3">
        <div className="w-[50px] h-[2px] bg-[#64ff4b]" />
      </div>
      <Marquee className="w-full my-10">
        {partners.length > 0 &&
          partners.map((item, index) => (
            <Image
              src={item.url}
              alt=""
              width={100}
              height={100}
              key={index}
              className="mx-14 grayscale-[100%] w-[120px] object-contain hover:grayscale-0 transition-opacity cursor-pointer"
            />
          ))}
      </Marquee>
    </div>
  );
};

export default Partners;
