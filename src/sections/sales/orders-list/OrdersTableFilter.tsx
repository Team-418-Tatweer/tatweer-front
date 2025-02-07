import { FaFilter } from "react-icons/fa";
import { RiResetLeftFill } from "react-icons/ri";
import { useState } from "react";

export interface FilterProps {
  onFilterChange?: (filters: FilterState) => void;
}

interface FilterState {
  date: string;
  orderType: string;
  orderStatus: string;
}

export function OrdersTableFilter({ onFilterChange }: FilterProps) {
  const [filters, setFilters] = useState<FilterState>({
    date: "",
    orderType: "",
    orderStatus: "",
  });

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleReset = () => {
    const resetFilters = {
      date: "",
      orderType: "",
      orderStatus: "",
    };
    setFilters(resetFilters);
    onFilterChange?.(resetFilters);
  };

  return (
    <div className="flex items-center border border-primary rounded-lg p-2 bg-white my-2 max-w-max">
      <div className="flex items-center px-4">
        <FaFilter className="text-primary" />
      </div>
      <div className="flex items-center px-4 border-l border-r border-primary">
        <span className="text-black font-semibold">Filter By</span>
      </div>
      <div className="flex items-center px-4 border-r border-primary">
        <select
          value={filters.date}
          onChange={e => handleFilterChange("date", e.target.value)}
          className="text-black bg-transparent border-none outline-none">
          <option value="">Select Date</option>
          <option value="2025-02-07">07 Feb 2025</option>
          {/* Add more date options as needed */}
        </select>
      </div>
      <div className="flex items-center px-4 border-r border-primary">
        <select
          value={filters.orderType}
          onChange={e => handleFilterChange("orderType", e.target.value)}
          className="text-black bg-transparent border-none outline-none">
          <option value="">Order Type</option>
          <option value="retail">Retail</option>
          <option value="wholesale">Wholesale</option>
        </select>
      </div>
      <div className="flex items-center px-4 border-r border-primary">
        <select
          value={filters.orderStatus}
          onChange={e => handleFilterChange("orderStatus", e.target.value)}
          className="text-black bg-transparent border-none outline-none">
          <option value="">Order Status</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>
      <div className="flex items-center px-4 cursor-pointer" onClick={handleReset}>
        <RiResetLeftFill className="fas fa-redo text-red-500" />
        <span className="text-red-500 ml-2">Reset Filter</span>
      </div>
    </div>
  );
}
