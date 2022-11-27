import { AdminLayout } from "../layouts";
import { HomeAdmin, UserAdmin } from "../pages/admin";

export const routesAdmin = [
  {
    path: "/admin",
    layout: AdminLayout,
    component: HomeAdmin,
    exact: true,
  },
  {
    path: "admin/users",
    layout: AdminLayout,
    component: UserAdmin,
    exact: true,
  },
];
