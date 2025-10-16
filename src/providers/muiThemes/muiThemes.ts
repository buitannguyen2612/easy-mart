import type { ThemeOptions } from "@mui/material";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
      light: "#63a4ff",
      dark: "#004ba0",
      contrastText: "#fff",
    },
    secondary: {
      main: "#f50057",
      light: "#ff5983",
      dark: "#bb002f",
      contrastText: "#fff",
    },
    background: {
      default: "#f9fafb", // page background
      paper: "#ffffff", // card background
    },
    text: {
      primary: "#111827",
      secondary: "#6b7280",
      disabled: "#9ca3af",
    },
    divider: "rgba(0,0,0,0.08)",
  },

  typography: {
    fontFamily: `"Manrope", "Open Sans", "Arial", sans-serif`,
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      letterSpacing: "-0.02em",
      color: "#111827",
    },
    h2: {
      fontSize: "2.25rem",
      fontWeight: 600,
      color: "#111827",
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 600,
      color: "#111827",
    },
    h4: {
      fontSize: "1.3rem",
      fontWeight: 600,
      color: "rgb(31, 41, 55)",
    },
    h5: {
      fontSize: "1.02rem",
      fontWeight: 600,
      color: "rgb(31, 41, 55)",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
      color: "rgb(75, 85, 99)",
    },
    body2: {
      fontSize: "0.875rem",
      color: "#6b7280",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      letterSpacing: "0.02em",
    },
  },

  shape: {
    borderRadius: 12,
  },

  spacing: 8, // base unit = 8px (MUI default)

  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
      styleOverrides: {
        root: {
          paddingTop: "4rem",
          paddingBottom: "4rem",
          "@media (max-width:600px)": {
            paddingTop: "2rem",
            paddingBottom: "2rem",
          },
          "@media (min-width:1200px)": {
            minWidth: "1200px",
            maxWidth: "none",
            width: "100%",
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "0.625rem",
          padding: "0.2rem 1.2rem",
          fontSize: "1rem",
          transition: "all 0.3s ease",
          boxShadow: "0 4px 12px rgba(25,118,210,0.2)",
          "&:hover": {
            boxShadow: "0 6px 20px rgba(25,118,210,0.3)",
          },
        },
        containedSecondary: {
          background: "linear-gradient(135deg, #f50057, #ff4081)",
          color: "#fff",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "1rem",
          boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "1.25rem",
          boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 12px 28px rgba(0,0,0,0.08)",
          },
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          color: "#1976d2",
          fontWeight: 500,
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },
  },
};
