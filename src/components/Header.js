import {
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Link, useParams } from "react-router-dom";

const Header = ({ inView }) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [didScrollDown, setDidScrollDown] = useState(false);

    const [anchorElNav, setAnchorElNav] = useState(null);
    const pages = ["one", "two"];
    const params = useParams();
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const test = () => {
        console.log(params);
    };

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > scrollPosition) {
    //             setDidScrollDown(true);
    //         } else {
    //             setDidScrollDown(false);
    //         }
    //         setScrollPosition(window.scrollY);
    //     };
    //     window.addEventListener("scroll", handleScroll);
    //     return () => {
    //         console.log("removing listner");
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, [scrollPosition]);

    return (
        <Container
            maxWidth="xl"
            sx={{
                position: "sticky",
                top: "0",
                background: "#FFC700",
                zIndex: "4",
                padding: ".5em 0",
                borderBottom: !inView ? "1px solid var(--fc-accent)" : "none",
            }}
        >
            <Box
                sx={{
                    flexGrow: 1,
                    display: { xs: "flex", md: "none" },
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: "block", md: "none" },
                    }}
                >
                    <MenuItem onClick={handleCloseNavMenu}>
                        <a href="#about">
                            <Typography textAlign="center">About</Typography>
                        </a>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                        <a href="#shows">
                            <Typography textAlign="center">Shows</Typography>
                        </a>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                        <a href="#contact">
                            <Typography textAlign="center">Contact</Typography>
                        </a>
                    </MenuItem>
                </Menu>

                <Typography variant="h4">SB</Typography>
            </Box>

            <Box
                sx={{
                    display: { xs: "none", md: "flex" },
                    justifyContent: "space-between",
                    margin: "1em 0",
                    top: 0,
                }}
            >
                <a href="#about">
                    <Typography variant="h3">About</Typography>
                </a>
                <a href="#shows">
                    <Typography variant="h3">Shows</Typography>
                </a>
                <a href="#contact">
                    <Typography variant="h3">Contact</Typography>
                </a>
                <a href="#merch">
                    <Typography variant="h3">Merch</Typography>
                </a>
            </Box>
        </Container>
    );
};

export default Header;
