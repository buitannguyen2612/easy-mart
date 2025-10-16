import { homeRouterConfig } from "@/pages/homePage/route";
import { interiorsRouteConfig } from "@/pages/Interiors/route";
import { createBrowserRouter } from "react-router";

export const mainRouterConfig = createBrowserRouter([
  homeRouterConfig,
  interiorsRouteConfig,
]);
