import PrivateLayout from "@/@layouts/PrivateLayout";
import InteriorPage from "@/pages/InteriorsPage";
import InteriorDetail from "@/pages/InteriorsPage/[id]";

import type { RouteObject } from "react-router";

export const interiorsRouteConfig: RouteObject = {
  path: "/",
  element: <PrivateLayout />,
  children: [
    { path: "interior", element: <InteriorPage /> },

    // Dynamic route
    { path: "interior/:id", element: <InteriorDetail /> },
  ],
};
