"use client";
import { Card } from "@/components/Card";
import { Alert } from "@/types/Alert";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaSyncAlt } from "react-icons/fa";
import { FaExclamationCircle } from "react-icons/fa";
import { AlertComponent } from "./Alert";

interface Props {
  alerts: Alert[];
}

const alert_states = ["resolved", "pending", "All"];
const alert_degrees: (Alert["degre"] | "All")[] = [
  "All",
  "fatal",
  "high",
  "medium",
  "low",
];

const ITEMS_PER_PAGE = 3;

export function AlertsList({ alerts }: Props) {
  const [selectedState, setSelectedState] =
    useState<(typeof alert_states)[number]>("All");
  const [selectedDegree, setSelectedDegree] = useState<Alert["degre"] | "All">("All");
  const [filteredAlerts, setFilteredAlerts] = useState(alerts);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setFilteredAlerts(
      alerts.filter(
        alert =>
          (selectedState === "All" || alert.state === selectedState) &&
          (selectedDegree === "All" || alert.degre === selectedDegree)
      )
    );
    setCurrentPage(1); // Reset to first page when filters change
  }, [selectedState, selectedDegree, alerts]);

  const totalPages = Math.ceil(filteredAlerts.length / ITEMS_PER_PAGE);

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const handleRefresh = () => {
    setCurrentPage(1);
    setSelectedState("All");
    setSelectedDegree("All");
  };

  const paginatedAlerts = filteredAlerts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <Card className="border border-primary">
      <div className="flex gap-8">
        <div>
          <h1 className="text-xl font-bold mt-2 mb-3">Alert State</h1>
          <div className="flex flex-col gap-2 ">
            {alert_states.map(state => (
              <button
                key={state}
                className={`relative p-5 rounded-xl flex items-center justify-start w-72 ${
                  selectedState === state ? "bg-red-500 text-white" : "bg-gray-200"
                }`}
                onClick={() => setSelectedState(state)}>
                {state}
                {selectedState === state && (
                  <span className="w-5 h-5 bg-inherit absolute -right-1 rotate-45 top-1/2 -translate-y-1/2 " />
                )}
              </button>
            ))}
          </div>
        </div>
        <div className="w-full">
          <div>
            <div className="w-full flex justify-between items-center mb-4">
              <div className="flex space-x-2">
                {alert_degrees.map(degree => (
                  <span
                    key={degree}
                    onClick={() => setSelectedDegree(degree)}
                    className={`cursor-pointer ${
                      selectedDegree === degree ? "underline" : ""
                    } ${
                      degree === "fatal"
                        ? "text-red-500"
                        : degree === "high"
                        ? "text-orange-500"
                        : degree === "medium"
                        ? "text-yellow-500"
                        : degree === "low"
                        ? "text-green-500"
                        : "text-blue-500"
                    }`}>
                    {degree}
                  </span>
                ))}
              </div>
              <div className="flex space-x-2 items-center">
                <span className="text-gray-500">
                  {currentPage} / {totalPages}
                </span>
                <FaChevronLeft
                  className={`text-gray-500 cursor-pointer ${
                    currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={handlePrevPage}
                />
                <FaChevronRight
                  className={`text-gray-500 cursor-pointer ${
                    currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={handleNextPage}
                />
                <FaSyncAlt
                  className="text-gray-500 cursor-pointer"
                  onClick={handleRefresh}
                />
              </div>
            </div>
          </div>
          {paginatedAlerts.map((alert, i) => (
            <AlertComponent key={i} alert={alert} />
          ))}
        </div>
      </div>
    </Card>
  );
}
