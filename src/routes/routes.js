import { routesAdmin } from "./routes.admin";
import { routesClient } from "./routes.client";
import { Error404 } from "../pages";
import { BasicLayout } from "../layouts";

export const routes = [
  ...routesAdmin,
  ...routesClient,
  {
    layout: BasicLayout,
    component: Error404,
  },
];
