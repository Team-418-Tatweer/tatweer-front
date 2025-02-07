import React from "react";
import { DashboardNavbar } from "./navbar";
import { DashboardHeader } from "./header";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex">
      <div>
        <DashboardNavbar />
      </div>
      <div className="flex flex-col w-full">
        <DashboardHeader />
        <div className="bg-gray-100 p-4 h-full min-h-[calc(100vh-112px)] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
