import { rowOneImage, rowTwoImage } from "@/data/image-hero";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="w-full md:min-h-screen flex items-center justify-center">
      <div>
        <h1 className="text-4xl py-5 xl:text-7xl 2xl:text-8xl text-center xl:leading-[80px] 2xl:leading-[100px] sm:mt-20 mt-20">
          Make <span className="text-[#64ff4b]">Ai image</span> <br />
          With your <br /> Imagination
        </h1>
        <div className="md:mt-5">
          <Image
            src="/line.png"
            alt=""
            width={2000}
            height={2}
            className="absolute hidden md:block"
          />
        </div>
        <div className="w-[100vw] mb-5 md:mb-20 relative">
          <div className="rotate-[-4deg] mt-10 md:mt-[6.5rem]">
            <Marquee>
              {rowOneImage.length > 0 &&
                rowOneImage.map((item, index) => (
                  <Image
                    key={index}
                    src={item.url}
                    alt=""
                    width={2000}
                    height={2}
                    className="md:m-4 w-[200px] m-2 md:w-[500px] rounded-[20px]"
                  />
                ))}
            </Marquee>
            <Marquee>
              {rowTwoImage.length > 0 &&
                rowTwoImage.map((item, index) => (
                  <Image
                    key={index}
                    src={item.url}
                    alt=""
                    width={2000}
                    height={2}
                    className="md:m-4 w-[200px] m-2 md:w-[500px] rounded-[20px]"
                  />
                ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
