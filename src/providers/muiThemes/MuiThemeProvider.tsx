import { themeOptions } from "@/providers/muiThemes/muiThemes";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import type { ReactNode } from "react";

const theme = createTheme(themeOptions);

export default function CustomThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
