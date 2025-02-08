import { ROUTES } from "@/config/routes";
import Link from "next/link";
import { StockWidget, StockWidgetProps } from "./StockWidget";
import { IMAGES_PATHS } from "@/config/images";
import { StockTable } from "./StockTable";
import { Card } from "@/components/Card";

const widgets: StockWidgetProps[] = [
  {
    title: "Total Products",
    number: 180,
    icon: IMAGES_PATHS.totalProducts,
  },
  {
    title: "Low Stock Products",
    number: 45,
    icon: IMAGES_PATHS.lowStock,
  },
  {
    title: "out of Stock Products",
    number: 23,
    icon: IMAGES_PATHS.outStock,
  },
  {
    title: "Most stock Products",
    number: 45,
    icon: IMAGES_PATHS.mostStock,
  },
];
export function StockComponent() {
  return (
    <div>
      <h1 className="text-primary text-2xl my-3 ">
        <Link href={ROUTES.inventory.basePath} className="font-extrabold">
          Inventory
        </Link>
        / <span className="font-normal">Stock</span>
      </h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {widgets.map((widget, index) => (
          <StockWidget key={index} {...widget} />
        ))}
      </div>
      <Card className="border border-primary mt-8">
        <StockTable />
      </Card>
    </div>
  );
}
