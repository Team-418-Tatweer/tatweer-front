import React from "react";

type Props = {
  title1: string;
  title2: string;
  color?: string;
};

const SalesOrders: React.FC<Props> = ({ title1,title2, color = "text-primary" }) => {
  return (
    <div className="bg-gray-100 py-4  ">
      <h1 className={`text-2xl font-bold ${color}`}>{title1} <span className="font-normal">{title2}</span></h1>
    </div>
  );
};

export default SalesOrders;
