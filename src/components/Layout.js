import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Box } from "@mui/material";

const Layout = () => {
    return (
        <Box position="relative">
            <Outlet />
            <Footer />
        </Box>
    );
};

export default Layout;
