import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { primary } from "./themes/primary";
import { CssBaseline } from "@mui/material";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={primary}>
            <CssBaseline />
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
