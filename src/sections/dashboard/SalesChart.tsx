"use client";
import React from "react";
import { ChartOptions, ChartData } from "chart.js";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data: ChartData<"line"> = {
  labels: [
    "5k",
    "10k",
    "15k",
    "20k",
    "25k",
    "30k",
    "35k",
    "40k",
    "45k",
    "50k",
    "55k",
    "60k",
  ],
  datasets: [
    {
      label: "Sales",
      data: [20, 40, 30, 60, 50, 70, 40, 60, 50, 70, 60, 50],
      borderColor: "#007bff",
      backgroundColor: "rgba(0, 123, 255, 0.1)",
      fill: true,
      pointBackgroundColor: "#007bff",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "#007bff",
      pointRadius: 4,
      pointHoverRadius: 6,
      pointHitRadius: 10,
      pointBorderWidth: 2,
      pointStyle: "circle",
      tension: 0.4,
    },
  ],
};
export const SalesChart = () => {
  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function (value) {
            return value + "%";
          },
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.raw + ",36464.77";
          },
        },
      },
    },
  };

  return (
    <div className="bg-white border border-blue-200 rounded-lg p-4 w-full max-w-4xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-primary text-xl font-semibold">Sales Details</h2>
        <div className="relative">
          <select className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <option>October</option>
            {/* Add more options as needed */}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
      </div>
      <div className="w-full h-64">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};
