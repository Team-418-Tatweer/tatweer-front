"use client";
import { Cell } from "@/components/TableCell";
import { ISupplier } from "@/types/Supplier";
import { SuppliersTableFilter } from "./suppliersTableFilter";
import { useState } from "react";

const table_headers: (keyof ISupplier)[] = [
  "name",
  "email",
  "phone",
  "address",
  "reliabilityScore",
];
export function SuppliersTable({ suppliers: suppliersProp }: { suppliers: ISupplier[] }) {
  const [suppliers, setSuppliers] = useState(suppliersProp);
  const handleFilterChange = (filteredData: ISupplier[]) => {
    setSuppliers(filteredData);
  };
  return (
    <div>
      <SuppliersTableFilter data={suppliersProp} onFilterChange={handleFilterChange} />
      <table className="w-full  border-separate border-spacing-5 ">
        <thead>
          <tr>
            {table_headers.map(header => (
              <th
                key={header}
                className="py-2 px-4 uppercase border-b border-primary text-primary">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {suppliers.map(supplier => (
            <tr key={supplier.id}>
              <Cell>{supplier.name}</Cell>
              <Cell>{supplier.email}</Cell>
              <Cell>{supplier.phone}</Cell>
              <Cell>{supplier.address}</Cell>
              <Cell
                className={`${
                  supplier.reliabilityScore >= 7
                    ? "text-green-500"
                    : supplier.reliabilityScore >= 4
                    ? "text-yellow-500"
                    : "text-red-500"
                }`}>
                &#x2022; {supplier.reliabilityScore}/10
              </Cell>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
