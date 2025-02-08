import React from "react";

type Props = {
  title: string;
  color?: string;
};

const SalesOrders: React.FC<Props> = ({ title, color = "text-blue-500" }) => {
  return (
    <div className="bg-gray-100 py-4  ">
      <h1 className={`text-4xl font-bold ${color}`}>{title}</h1>
    </div>
  );
};

export default SalesOrders;
