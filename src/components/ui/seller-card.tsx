import Ratings from "@/lib/ratings";
import { Avatar, Card } from "@nextui-org/react";
import React from "react";

type Props = {};

const SellerCard = (props: Props) => {
  return (
    <Card className="py-4 bg-[#100d21] m-3 w-full md:w-[31%] 2xl:w-[23%] flex flex-col items-center text-white border border-[#ffffff22] cursor-pointer rounded-xl">
      <Avatar
        src="https://pixner.net/aikeu/assets/images/blog-details/a-one.png"
        className="w-[80px] h-[80px]"
      />
      <span className="text-[16px] text-[#b1b0b6] font-Inter font-[500] py-2 text-xl">
        @Shahriar Sajeeb
      </span>
      <div className="flex items-center">
        <span className="text-[16px] text-[#b1b0b6] font-Inter font-[500] pr-2">
          4.5/5
        </span>
        <Ratings rating={4.5} />
      </div>
      <span className="text-[16px] text-[#b1b0b6] font-Inter font-[500] py-2">
        Total Sales: 212
      </span>
    </Card>
  );
};

export default SellerCard;
