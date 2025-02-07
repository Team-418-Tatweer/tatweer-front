import { Card } from "@/components/Card";
import { IconType } from "react-icons";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

interface DashboardWidgetProps {
  title: string;
  value: string;
  icon: IconType;
  iconBg: string;
  change: number;
  changeText: string;
  changeColor: string;
}
export function DashboardWidget({
  title,
  value,
  icon: Icon,
  iconBg,
  change,
  changeText,
  changeColor,
}: DashboardWidgetProps) {
  return (
    <Card className="flex flex-col items-center ">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-gray-600">{title}</h2>
        <div className={`p-2 rounded-full ${iconBg}`}>
          <Icon />
        </div>
      </div>
      <div className="mt-4 text-3xl font-bold">{value}</div>
      <div className={`mt-2 text-sm flex items-center ${changeColor}`}>
        {change > 0 ? <FaArrowUp className="mr-1" /> : <FaArrowDown className="mr-1" />}
        {changeText}
      </div>
    </Card>
  );
}
