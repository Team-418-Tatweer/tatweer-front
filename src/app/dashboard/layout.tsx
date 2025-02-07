import { UserProvider } from "@/context/userContext/provider";
import DashboardLayout from "@/sections/layouts/dashboard-layout";
import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <UserProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </UserProvider>
  );
};

export default Layout;
