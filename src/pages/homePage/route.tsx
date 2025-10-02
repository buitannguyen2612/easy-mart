import PublicLayout from "@/@layouts/PublicLayout";
import HomePage from "@/pages/homePage";
import type { RouteObject } from "react-router";

export const homeRouterConfig: RouteObject = {
  path: "/",
  element: <PublicLayout />,
  children: [{ path: "home", element: <HomePage /> }],
};
