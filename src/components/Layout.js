import React, { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { ThemeProvider } from "@emotion/react";
import { primary } from "../themes/primary";
import { Box } from "@mui/material";

const Layout = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleOnScroll = () => {
        console.log("scrolled");
    };

    return (
        <Box position="relative" onScroll={handleOnScroll}>
            <Header />
            <Outlet />
            <Footer />
        </Box>
    );
};

export default Layout;
