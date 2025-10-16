import CustomThemeProvider from "@/providers/muiThemes/MuiThemeProvider";
import QueryProvider from "@/providers/reactQueryProvider/QueryProvider";
import { mainRouterConfig } from "@/routes";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import { CssBaseline, GlobalStyles } from "@mui/material";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryProvider>
      <CustomThemeProvider>
        <CssBaseline />
        {/* This is use for custom css for all of the DOM in this component */}
        <GlobalStyles
          styles={{
            ".slick-list": {
              padding: "1.25rem 0 !important",
            },
          }}
        />
        <RouterProvider router={mainRouterConfig} />
      </CustomThemeProvider>
    </QueryProvider>
  </StrictMode>
);
