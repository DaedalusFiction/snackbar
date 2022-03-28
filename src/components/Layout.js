import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useInView } from "react-intersection-observer";
import { Box } from "@mui/material";

const Layout = () => {
    const [headerRef, headerRefInView, headerEntry] = useInView({
        threshold: 0,
    });

    return (
        <Box position="relative">
            <Header inView={headerRefInView} />
            <Box ref={headerRef} />
            <Outlet />
            <Footer />
        </Box>
    );
};

export default Layout;
