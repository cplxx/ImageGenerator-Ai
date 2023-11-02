import { styles } from "@/lib/styles";
import { Avatar, Card, Divider } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import Ratings from "@/lib/ratings";
import Link from "next/link";
import { Button } from "./button";

type Props = {};

const PromptCard = (props: Props) => {
  return (
    <Card
      radius="lg"
      className="w-[90%] md:w-[31%] 2xl:w-[23%] p-4 bg-[#130f23] m-3 rounded-xl"
    >
      <div className="relative">
        <Image
          src="https://pixner.net/aikeu/assets/images/category/fourteen.png"
          alt=""
          width={300}
          height={300}
          className="!w-full object-cover"
        />
        <div className="absolute bottom-2 left-2">
          <div className="w-max duration-300 transition-opacity bg-black/95 hover:text-black text-white p-[10px] items-center flex rounded-xl ">
            <Image
              src="https://pixner.net/aikeu/assets/images/category/chat.png"
              alt=""
              width={25}
              height={25}
            />
            <span className={`${styles.label} pl-2 text-white`}>Chatgpt</span>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between py-2">
        <h3 className={`${styles.label} text-[18px] text-white`}>
          Animal Prompts
        </h3>
        <p className={`${styles.label}`}>R$25.00</p>
      </div>
      <Divider className="bg-[#FFFFFF18] my-3" />

      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar src="https://i.pravatar.cc/150?u=a0425811e29026302d" />
          <p className="text-[16px] text-[#b1b0b6] font-Inter font-[500]">
            @Shahriar
          </p>
        </div>
        <Ratings rating={4.5} />
      </div>
      <br />
      <Link href="/shop/124" classNamew-full>
        <Button
          className={`mb-3 w-full text-white bg-transparent border border-[#16c242] hover:bg-[#16c242] hover:text-[black] duration-300 transition-opacity font-[600] rounded-xl`}
        >
          Get prompts
        </Button>
      </Link>
    </Card>
  );
};

export default PromptCard;
