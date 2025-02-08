export const ROUTES = {
  home: "/",
  login: "/login",
  signup: "/signup",
  dashboard: "/dashboard",
  resetPassword: "/reset-password",
  forgotPassword: "/forgot-password",
  sales: {
    ordersList: "/dashboard/sales/orders",
  },
  inventory: {
    basePath: "/dashboard/inventory",
    stock: "/dashboard/inventory/stock",
    suppliers: "/dashboard/inventory/suppliers",
    transfers: "/dashboard/inventory/transfers",
    addSuplier: "/dashboard/inventory/add-supplier",
  },
  alerts: {
    base: "/dashboard/alerts",
    details: (id: string) => `/dashboard/alerts/${id}`,
  },
};
