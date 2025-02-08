import CollapsibleContent from "@/components/CollapsibleContent";
import type { Alert } from "@/types/Alert";
import { useState } from "react";
import { FaBars, FaExclamationCircle } from "react-icons/fa";

export function AlertComponent({ alert }: { alert: Alert }) {
  const [isColapsed, setIsColapsed] = useState(false);
  return (
    <div className="bg-white shadow-md rounded-lg mb-4">
      <div
        onClick={() => setIsColapsed(!isColapsed)}
        className="border-b border-gray-200 p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaExclamationCircle className="text-red-500" />
          <span className="text-gray-700">{alert.title} </span>
        </div>
        <div className="text-gray-500">{alert.element}</div>
        <div className="text-gray-500">10/02 16:11</div>
        <FaBars className="text-gray-500 cursor-pointer" />
      </div>
      <CollapsibleContent isOpen={!isColapsed}>
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <i className="fas fa-exclamation-triangle text-yellow-500"></i>
              <span className="text-gray-700">{alert.description}</span>
            </div>
            <div className="text-red-500 font-bold">Severity : FATAL</div>
          </div>
          <div className="flex space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              GENERATE ACTION PLAN
            </button>
            <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg">
              Mark as Resolved
            </button>
          </div>
        </div>
      </CollapsibleContent>
    </div>
  );
}
