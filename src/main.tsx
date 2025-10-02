import CustomThemeProvider from "@/providers/muiThemes/MuiThemeProvider";
import QueryProvider from "@/providers/reactQueryProvider/QueryProvider";
import { mainRouterConfig } from "@/routes";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryProvider>
      <CustomThemeProvider>
        <RouterProvider router={mainRouterConfig} />
      </CustomThemeProvider>
    </QueryProvider>
  </StrictMode>
);
