import { FaDownload, FaFilter, FaSearch } from "react-icons/fa";

export function StockTableFilter() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center border border-blue-300 rounded-lg p-1 ">
        <input
          type="text"
          placeholder="Search for id, product"
          className="border-none focus:outline-none focus:ring-0 w-96 p-1 rounded-l-lg"
        />
        <button className="border-l border-blue-300 p-1">
          <FaSearch />
        </button>
      </div>
      <div className="flex text-sm font-thin items-center ml-4">
        <button className="flex items-center border border-blue-300 rounded-lg p-1 ml-2 px-3">
          <span className="mr-2">Filter</span>
          <FaFilter />
        </button>
        <button className="flex items-center border border-blue-300 rounded-lg p-1 ml-2 px-3">
          <span className="mr-2">Export</span>
          <FaDownload />
        </button>
      </div>
    </div>
  );
}
