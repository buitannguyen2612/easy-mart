import PrivateLayout from "@/@layouts/PrivateLayout";
import InteriorPage from "@/pages/Interiors";
import InteriorDetail from "@/pages/Interiors/[id]";
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
