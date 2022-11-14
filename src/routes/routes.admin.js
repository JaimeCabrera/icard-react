import { AdminLayout } from "../layouts";
import { HomeAdmin } from "../pages/admin";

export const routesAdmin = [
  {
    path: "/admin",
    layout: AdminLayout,
    component: HomeAdmin,
  },
];
