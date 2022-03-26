import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [didScrollDown, setDidScrollDown] = useState(false);
    const test = () => {
        console.log(window.scrollY);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > scrollPosition) {
                setDidScrollDown(true);
            } else {
                setDidScrollDown(false);
            }
            setScrollPosition(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollPosition]);

    return (
        <Container
            maxWidth="xl"
            sx={{
                position: "sticky",
                top: "0",
                background: "#FFC700",
                zIndex: "4",
                paddingTop: ".5em",
                borderBottom: didScrollDown
                    ? "1px solid var(--fc-accent)"
                    : "none",
            }}
        >
            <Box
                sx={{
                    display: { xs: "none", md: "flex" },
                    justifyContent: "space-between",
                    margin: "1em 0",
                    top: 0,
                }}
            >
                <Typography variant="h3">About</Typography>
                <Typography variant="h3">Shows</Typography>
                <Typography variant="h3">Contact</Typography>
                <Typography variant="h3">Merch</Typography>
            </Box>
        </Container>
    );
};

export default Header;
