import { homeRouterConfig } from "@/pages/homePage/route";
import { interiorsRouteConfig } from "@/pages/InteriorsPage/route";
import { techRouteConfig } from "@/pages/techLandingPage/route";
import { createBrowserRouter } from "react-router";

export const mainRouterConfig = createBrowserRouter([
  homeRouterConfig,
  interiorsRouteConfig,
  techRouteConfig,
]);
