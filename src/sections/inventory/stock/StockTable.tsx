import { Cell } from "@/components/TableCell";
import { StockTableFilter } from "./StockTableFilter";
import { IStock } from "@/types/Stock";
import { _stocks } from "@/mock/_stock";
import Image from "next/image";
import { FiEdit, FiEye, FiTrash } from "react-icons/fi";

const table_headers: (keyof IStock)[] = ["id", "price", "quantity", "date", "status"];
export function StockTable() {
  return (
    <div>
      <StockTableFilter />
      <div className="container mx-auto p-4">
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="w-full bg-primary text-white">
                <th className="py-3 px-4 text-left">
                  <input className="form-checkbox h-5 w-5 text-primary" type="checkbox" />
                </th>
                {[...table_headers, "actions"].map(header => (
                  <th key={header} className="py-3 px-4 uppercase">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {_stocks.map(stock => (
                <tr key={stock.id} className="border-b">
                  <td className="py-3 px-4">
                    <input
                      className="form-checkbox h-5 w-5 text-primary"
                      type="checkbox"
                    />
                  </td>
                  <td className="py-3 px-4 flex items-center">
                    <Image
                      alt="Product image"
                      className="w-10 h-10 rounded mr-3"
                      height="50"
                      src={stock.image}
                      width="50"
                    />
                    <div>
                      <div className="text-primary">{stock.id}</div>
                      <div className="text-gray-500">{stock.name}</div>
                    </div>
                  </td>
                  <td className="py-3 px-4">${stock.price}</td>
                  <td className="py-3 px-4">{stock.quantity}</td>
                  <td className="py-3 px-4">
                    <div>{stock.date}</div>
                    <div>at {stock.date}</div>
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`${
                        stock.status === "available"
                          ? "bg-green-100 text-green-500"
                          : "bg-red-100 text-red-500"
                      } py-1 px-3 rounded-full text-xs`}>
                      {stock.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 my-auto flex items-center space-x-2">
                    <FiEye className="text-gray-500 cursor-pointer" />
                    <FiEdit className="text-gray-500 cursor-pointer" />
                    <FiTrash className="text-gray-500 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center p-4">
            <div className="text-gray-600">1 - 10 of 13 Pages</div>
            <div className="flex items-center space-x-2">
              <div className="text-gray-600">The page on</div>
              <select className="form-select border border-gray-300 rounded-md">
                <option>1</option>
              </select>
              <button className="text-gray-600">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="text-gray-600">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
