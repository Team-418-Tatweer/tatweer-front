"use client";
import { Card } from "@/components/Card";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  PointElement,
  BarElement,
  LinearScale,
  Title,
  Tooltip,
  LineController,
  Legend,
  ChartOptions,
} from "chart.js";
import { _alerts_history } from "@/mock/_alerts";
import { FaChevronLeft, FaChevronRight, FaSyncAlt } from "react-icons/fa";
ChartJS.register(
  CategoryScale,
  LineController,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function AlertHistory() {
  const data = {
    labels: _alerts_history.labels,
    datasets: [
      {
        label: "Open",
        data: _alerts_history.open,
        borderColor: "#1f77b4",
        backgroundColor: "#1f77b4",
        fill: false,
      },
      {
        label: "Resolved",
        data: _alerts_history.resolved,
        borderColor: "#ff7f0e",
        backgroundColor: "#ff7f0e",
        fill: false,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Alert History",
      },
    },
  };

  return (
    <Card>
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-xl font-bold ">Alert History</h2>
        <div className="flex items-center space-x-2">
          <FaChevronLeft className="text-gray-500" />
          <span className="text-gray-500">2025-09</span>
          <FaChevronRight className="text-gray-500" />
          <FaSyncAlt className="text-gray-500" />
        </div>
      </div>
      <div className="flex w-full">
        <div className="w-1/3 mt-10">
          <div className="overflow-hidden border border-primary rounded-lg max-w-64 mb-4">
            <p className=" bg-primary text-white py-1 px-2 text-light">Created</p>
            <div className="flex justify-between items-center p-2">
              <div>
                <p className="text-2xl font-bold">
                  {_alerts_history.averageDailyCreated}
                </p>
                <p className="text-sm">Daily Average</p>
              </div>
              <div>
                <p className="text-2xl font-bold">{_alerts_history.monthlyCreated}</p>
                <p className="text-sm text-light">Monthly Total</p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden border border-primary rounded-lg max-w-64 mb-4">
            <p className=" bg-primary text-white py-1 px-2 text-light">Resolved</p>
            <div className="flex justify-between items-center p-2">
              <div>
                <p className="text-2xl font-bold">
                  {_alerts_history.averageDailyResolved}
                </p>
                <p className="text-sm">Daily Average</p>
              </div>
              <div>
                <p className="text-2xl font-bold">{_alerts_history.monthlyResolved}</p>
                <p className="text-sm text-light">Monthly Total</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/3 pl-4">
          <div className="flex items-center mb-2">
            <div className="flex items-center mr-4">
              <span className="w-3 h-3 bg-gray-500 rounded-full inline-block mr-1"></span>
              <span className="text-sm">Resolved</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-primary rounded-full inline-block mr-1"></span>
              <span className="text-sm">Open</span>
            </div>
          </div>
          <Bar data={data} options={options} />
        </div>
      </div>
    </Card>
  );
}
