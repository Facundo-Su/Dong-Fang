import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const Theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#43bad8ff",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: "#ff0000",
    },
    background: {
      default: "#fff",
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
