import type { ISupplier } from "@/types/Supplier";
import { ChangeEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";

interface SuppliersTableFilterProps {
  data: ISupplier[];
  onFilterChange: (filteredData: ISupplier[]) => void;
}

export function SuppliersTableFilter({
  data,
  onFilterChange,
}: SuppliersTableFilterProps) {
  const [search, setSearch] = useState("");
  const [reliabilityScore, setReliabilityScore] = useState<number | null>(null);

  const filterData = (searchValue: string, reliabilityValue: number | null) => {
    if (!data) return;
    if (!searchValue && !reliabilityScore) return onFilterChange(data);
    const filteredData = data.filter(supplier => {
      const matchesSearch = searchValue
        ? supplier.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          supplier.email.toLowerCase().includes(searchValue.toLowerCase())
        : true;

      const matchesReliability = reliabilityValue
        ? supplier.reliabilityScore >= reliabilityValue
        : true;

      return matchesSearch && matchesReliability;
    });

    onFilterChange(filteredData);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
    filterData(newSearch, reliabilityScore);
  };

  const handleReliabilityScoreChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newScore = e.target.value ? parseFloat(e.target.value) : null;
    setReliabilityScore(newScore);
    filterData(search, newScore);
  };

  return (
    <div className="flex justify-between items-center mb-4 bg-primary p-3 rounded-lg text-white">
      <div className="flex items-center">
        <div className="relative">
          <input
            id="search"
            type="text"
            placeholder="Search by name or email"
            value={search}
            onChange={handleSearchChange}
            className="border border-gray-300 rounded-2xl px-2 py-1 pl-8 text-black"
          />
          <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-light" />
        </div>
      </div>
      <div className="flex items-center">
        <label htmlFor="reliabilityScore" className="mr-2">
          Reliability Score:
        </label>
        <input
          id="reliabilityScore"
          type="number"
          value={reliabilityScore ?? ""}
          onChange={handleReliabilityScoreChange}
          className="border border-gray-300 rounded-2xl px-2 py-1 text-black"
        />
      </div>
    </div>
  );
}
