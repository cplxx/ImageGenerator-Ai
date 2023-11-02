"use client";

import Header from "@/components/ui/Header";
import About from "@/components/ui/about";
import BestSellers from "@/components/ui/best-sellerts";
import Footer from "@/components/ui/footer";
import Future from "@/components/ui/future";
import Hero from "@/components/ui/hero";
import Partners from "@/components/ui/partners";
import PromptCard from "@/components/ui/prompt-card";
import SellersBanner from "@/components/ui/sellers-banner";
import { styles } from "@/lib/styles";
import { Divider } from "@nextui-org/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {};

const Page = (props: Props) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <div>
        <Header activeItem={0} />
        <Hero />
      </div>
      <Image
        src={"https://pixner.net/aikeu/assets/images/footer/shape-two.png"}
        width={120}
        height={120}
        alt=""
        className="absolute right-[-30px]"
      />
      <br />
      <div className="w-[95%] md:w-[90%] xl:w-[80%] 2xl:w-[75%] m-auto">
        <About />
        <div>
          <h1 className={`${styles.heading} m-5`}>Latest Prompts</h1>
          <div className="w-full flex flex-wrap">
            <PromptCard />
            <PromptCard />
            <PromptCard />
            <PromptCard />
            <PromptCard />
          </div>
          <br />
          <BestSellers />
          <Future />
          <Partners />
          <SellersBanner />
          <br />
          <br />
          <Divider className="bg-[#ffffff23]" />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Page;
