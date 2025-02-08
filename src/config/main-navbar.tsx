import { INavItem } from "@/types/NavItem";
import { FaTasks } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { LuBadgeHelp, LuChartColumn } from "react-icons/lu";
import { MdSpaceDashboard } from "react-icons/md";
import { RiShieldUserLine, RiShoppingBag3Line } from "react-icons/ri";
import { TbBuildingWarehouse } from "react-icons/tb";
import { ROUTES } from "./routes";
import { FiAlertTriangle } from "react-icons/fi";

export const navData: INavItem[] = [
  {
    title: "Dashboard",
    path: "/dashboard",
    Icon: <MdSpaceDashboard />,
  },
  {
    title: "Sales",
    Icon: <FaTasks />,
    path: "/dashboard/sales",
    childs: [
      {
        title: "Orders",
        path: ROUTES.sales.ordersList,
      },
      { title: "Customers", path: "/dashboard/sales/customers" },
      { title: "Invoices", path: "/dashboard/sales/invoices" },
    ],
  },
  {
    title: "Products",
    Icon: <RiShoppingBag3Line />,
    path: "/dashboard/products",
    childs: [
      { title: "All Products", path: "/dashboard/products/All" },
      { title: "Prodcut Analytics", path: "/dashboard/products/reports" },
      { title: "Add New Product", path: "/dashboard/products/add" },
    ],
  },
  {
    title: "Inventory",
    Icon: <TbBuildingWarehouse />,
    path: ROUTES.inventory.basePath,
    childs: [
      { title: "Stock Levels", path: ROUTES.inventory.stock },
      { title: "Suppliers", path: ROUTES.inventory.suppliers },
      { title: "Inventory Transfers", path: ROUTES.inventory.transfers },
    ],
  },
  {
    title: "Reports",
    Icon: <LuChartColumn />,
    childs: [
      { title: "Sales Reports", path: "/reports/sales" },
      { title: "Inventory Reports", path: "/reports/inventory" },
      { title: "Financial Reports", path: "/reports/financial" },
    ],
  },
  {
    title: "Alerts & Suggestions",
    path: ROUTES.alerts.base,
    Icon: <FiAlertTriangle />,
    childs: [{ title: "All Alerts", path: ROUTES.alerts.base }],
  },
  {
    title: "Manage Team",
    Icon: <GoPeople />,
    childs: [
      { title: "Team Members", path: "/team/members" },
      { title: "Activity Logs", path: "/team/logs" },
    ],
  },
  {
    title: "Settings",
    Icon: <RiShieldUserLine />,
    childs: [
      { title: "General Settings", path: "/settings/general" },
      { title: "Security & Permissions", path: "/settings/security" },
      { title: "Profile", path: "/settings/profile" },
    ],
  },
  {
    title: "Help",
    Icon: <LuBadgeHelp />,
    childs: [
      { title: "FAQs", path: "/help/faqs" },
      { title: "Contact Support", path: "/help/support" },
      { title: "System Status", path: "/help/status" },
    ],
  },
];
