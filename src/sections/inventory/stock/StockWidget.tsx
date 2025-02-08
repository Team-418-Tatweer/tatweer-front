import { Card } from "@/components/Card";
import Image from "next/image";

export interface StockWidgetProps {
  title: string;
  number: number;
  icon: string;
}
export function StockWidget({ icon, number, title }: StockWidgetProps) {
  return (
    <Card className="border border-primary flex justify-between items-center py-7">
      <div>
        <h3 className=" text-light">{title}</h3>
        <h4>{number}</h4>
      </div>
      <Image src={icon} alt={title} width={45} height={45} className="rounded-full" />
    </Card>
  );
}
