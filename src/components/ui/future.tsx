import Image from "next/image";
import React from "react";
import { Button } from "./button";

type Props = {};

const Future = (props: Props) => {
  return (
    <div className="w-full relative p-4 md:p-[unset] grid md:grid-cols-2 py-8">
      <div className="col-span-1">
        <Image
          src="https://pixner.net/aikeu/assets/images/tools-thumb.png"
          width={800}
          height={500}
          alt=""
          className="md-w-[90%] md:ml-[-50px] 2xl:ml-[90px]"
        />
      </div>
      <div className="col-span-1 w-full flex items-center justify-center">
        <div className="2xl:w-[60%]">
          <Button className="text-[18px] p-5 font-[600] font-Inter rounded-[8px] text-white mb-[30px] h-[37px] bg-[#22211f]">
            Future
          </Button>
          <h5 className="text-4xl font-[700] font-Inter text-white mb-5 !leading-[50px]">
            Unleashing the glorius future of Ai genereted images
          </h5>
          <p className="text-[18px] font-[400] text-[#b1b0b6] font-Inter pb-5">
            One of the most prominet techniques in AI image generation is use of
            Generative adversarial networks
          </p>
        </div>
      </div>
    </div>
  );
};

export default Future;
