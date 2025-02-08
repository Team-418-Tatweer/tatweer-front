"use client";
import React from "react";
import { IOrder } from "@/types/Order";
import { OrdersTableFilter } from "./OrdersTableFilter";
import { useRouter } from "next/navigation";

interface OrdersTableProps {
  orders: IOrder[];
}

const table_headers: (keyof IOrder)[] = [
  "id",
  "client",
  "address",
  "date",
  "Region",
  "totalPrice",
  "status",
];

export function OrdersTable({ orders }: OrdersTableProps) {
  const router = useRouter();

  const handleRowClick = (orderId: string) => {
    router.push(`/dashboard/sales/orders/${orderId}`);
  };

  return (
    <div className="max-w-7xl mx-auto  p-6 rounded-lg ">
      <div className="overflow-x-auto">
        <OrdersTableFilter />
        <table className="min-w-full bg-primary text-white rounded-lg">
          <thead>
            <tr>
              {table_headers.map(header => (
                <th key={header} className="py-2 px-4 uppercase">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white text-gray-700">
            {orders.map(order => (
             <tr key={order.id} onClick={() => handleRowClick(order.id)} className="border-b cursor-pointer hover:bg-gray-100">
                <td className="py-4 px-4">{order.id}</td>
                <td className="py-4 px-4">{order.client}</td>
                <td className="py-4 px-4">{order.address}</td>
                <td className="py-4 px-4">{order.date}</td>
                <td className="py-4 px-4">{order.Region}</td>
                <td className="py-4 px-4">{order.totalPrice}</td>
                <td className="py-4 px-4">
                  <span
                    className={`px-2 py-1 rounded-full ${
                      order.status === "completed"
                        ? "bg-green-200 text-green-800"
                        : order.status === "pending"
                        ? "bg-purple-200 text-purple-800"
                        : "bg-red-200 text-red-800"
                    }`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-4">
        <button className="bg-white border border-primary text-primary px-4 py-2 rounded-lg">
          Prev. Date
        </button>
        <button className="bg-white border border-primary text-primary px-4 py-2 rounded-lg">
          Next Date
        </button>
      </div>
    </div>
  );
}
