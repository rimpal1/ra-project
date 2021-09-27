import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppProvider } from "./state/appStateManagement";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme();

ReactDOM.render(
   <BrowserRouter>
      <ThemeProvider theme={theme}>
         <CssBaseline />
         <AppProvider>
            <App />
         </AppProvider>
      </ThemeProvider>
   </BrowserRouter>,
   document.getElementById("root")
);
