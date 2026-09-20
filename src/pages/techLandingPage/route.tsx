import PrivateLayout from "@/@layouts/PrivateLayout";
import TechLandingPage from "@/pages/techLandingPage";

import type { RouteObject } from "react-router";

export const techRouteConfig: RouteObject = {
  path: "/",
  element: <PrivateLayout />,
  children: [{ path: "phones", element: <TechLandingPage /> }],
};
