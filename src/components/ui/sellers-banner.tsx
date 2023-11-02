import Link from "next/link";
import React from "react";
import { Button } from "./button";

type Props = {};

const SellersBanner = (props: Props) => {
  return (
    <div className="w-full 2xl:w-[80%] 2xl:m-auto h-[30vh] flex items-center justify-center sellers-banner rounded-xl md:m-2">
      <div className="text-center">
        <h1 className="text-4xl font-[700] font-Inter  !text-indigo-950">
          Start to selling with us
        </h1>
        <br />
        <br />
        <Link href={"/create-shop"}>
          <Button
            variant={"ghost"}
            className="mb-3 p-6 rounded-md text-xl bg-black text-white"
          >
            <span>Get started</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SellersBanner;
