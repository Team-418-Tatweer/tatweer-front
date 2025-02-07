import { Card } from "@/components/Card";
import { DashboardWidget } from "./WidgetCard";

import { FaUser, FaBox, FaChartLine, FaClock } from "react-icons/fa";
import { SalesChart } from "./SalesChart";

const cards = [
  {
    title: "Total User",
    value: "40,689",
    icon: FaUser,
    iconBg: "bg-purple-100 text-purple-500",
    change: 8.5,
    changeText: "8.5% Up from yesterday",
    changeColor: "text-green-500",
  },
  {
    title: "Total Order",
    value: "10,293",
    icon: FaBox,
    iconBg: "bg-yellow-100 text-yellow-500",
    change: 1.3,
    changeText: "1.3% Up from past week",
    changeColor: "text-green-500",
  },
  {
    title: "Total Sales",
    value: "$89,000",
    icon: FaChartLine,
    iconBg: "bg-green-100 text-green-500",
    change: -4.3,
    changeText: "4.3% Down from yesterday",
    changeColor: "text-red-500",
  },
  {
    title: "Total Pending",
    value: "2,040",
    icon: FaClock,
    iconBg: "bg-orange-100 text-orange-500",
    change: 1.8,
    changeText: "1.8% Up from yesterday",
    changeColor: "text-green-500",
  },
  {
    title: "Total Pending",
    value: "2,040",
    icon: FaClock,
    iconBg: "bg-orange-100 text-orange-500",
    change: 1.8,
    changeText: "1.8% Up from yesterday",
    changeColor: "text-green-500",
  },
];

export function DashboardSection() {
  return (
    <div>
      <h1 className="font-extrabold text-primary text-4xl my-5">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-8">
        {cards.map((card, index) => (
          <DashboardWidget key={index} {...card} />
        ))}
        <Card
          className="col-span-5 sm:grid-cols-3 lg:col
      -span-3">
          <SalesChart />
        </Card>
      </div>
    </div>
  );
}
