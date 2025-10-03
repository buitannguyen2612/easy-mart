import PrivateLayout from "@/@layouts/PrivateLayout";
import HomePage from "@/pages/homePage";
import type { RouteObject } from "react-router";

export const homeRouterConfig: RouteObject = {
  path: "/",
  element: <PrivateLayout />,
  children: [{ path: "home", element: <HomePage /> }],
};
