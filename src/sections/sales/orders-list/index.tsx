import { ROUTES } from "@/config/routes";
import Link from "next/link";
import { OrdersTable } from "./OrdersTable";
import { _orders } from "@/mock/_orders";

export function OrdersListComponent() {
  return (
    <main>
      <h1 className="text-primary text-2xl my-3">
        <Link href={ROUTES.sales.ordersList} className="font-extrabold">
          Sales
        </Link>{" "}
        / <span className="font-normal">Orders</span>
      </h1>
      <OrdersTable orders={_orders} />
    </main>
  );
}
