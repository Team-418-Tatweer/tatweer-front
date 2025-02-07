import { INavItem } from "@/types/NavItem";
import { FaTasks } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { LuBadgeHelp, LuChartColumn } from "react-icons/lu";
import { MdSpaceDashboard } from "react-icons/md";
import { RiShieldUserLine, RiShoppingBag3Line } from "react-icons/ri";
import { TbBuildingWarehouse } from "react-icons/tb";
import { ROUTES } from "./routes";

export const navData: INavItem[] = [
  {
    title: "Dashboard",
    path: "/dashboard",
    Icon: <MdSpaceDashboard />,
  },
  {
    title: "Sales",
    Icon: <FaTasks />,
    childs: [
      {
        title: "Orders",
        path: ROUTES.sales.ordersList,
      },
      { title: "Customers", path: "/sales/customers" },
      { title: "Invoices", path: "/sales/invoices" },
    ],
  },
  {
    title: "Products",
    Icon: <RiShoppingBag3Line />,
    childs: [
      { title: "All Products", path: "/products/all" },
      { title: "Categories", path: "/products/categories" },
      { title: "Add New Product", path: "/products/new" },
    ],
  },
  {
    title: "Inventory",
    Icon: <TbBuildingWarehouse />,
    childs: [
      { title: "Stock Levels", path: "/inventory/stock" },
      { title: "Suppliers", path: "/inventory/suppliers" },
      { title: "Inventory Transfers", path: "/inventory/transfers" },
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
