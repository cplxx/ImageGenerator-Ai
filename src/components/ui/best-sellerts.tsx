import React from "react";
import SellerCard from "./seller-card";

type Props = {};

const BestSellers = (props: Props) => {
  return (
    <div className="mb-10">
      <h1 className="text-4xl font-[700] font-Inter text-white p-2 mb-5">
        Top Seller
      </h1>
      <div className="flex flex-wrap">
        <SellerCard />
        <SellerCard />
        <SellerCard />
        <SellerCard />
      </div>
    </div>
  );
};

export default BestSellers;
