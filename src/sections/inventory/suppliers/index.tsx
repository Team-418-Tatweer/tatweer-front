import { ROUTES } from "@/config/routes";
import Link from "next/link";
import { SuppliersTable } from "./suppliersTable";
import { _suppliers } from "@/mock/_suppliers";
import { IStock } from "@/types/Stock";

export function SuppliersComponent() {
  return (
    <main>
      <div className="flex justify-between items-center my-4">
        <h1 className="text-primary text-2xl my-3">
          <Link href={ROUTES.inventory.basePath} className="font-extrabold">
            Inventory
          </Link>
          / <span className="font-normal">Suppliers</span>
        </h1>
        <Link
          href={ROUTES.inventory.addSuplier}
          className="px-6 py-2 bg-primary text-white rounded-lg">
          Add New Supplier
        </Link>
      </div>
      <SuppliersTable suppliers={_suppliers} />
    </main>
  );
}
