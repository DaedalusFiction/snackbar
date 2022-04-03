import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
    return (
        <Container
            maxWidth="xl"
            sx={{ borderTop: "1px solid var(--fc-accent)" }}
        >
            <Box
                sx={{
                    display: "flex",
                    gap: "2em",
                    justifyContent: "space-between",
                    margin: "1em 0",
                }}
            >
                <Typography variant="p" sx={{ color: "var(--fc-accent)" }}>
                    Copyright 2022 SNACK BAR
                </Typography>
                <a href="#hero">
                    <Typography variant="p" sx={{ color: "var(--fc-accent)" }}>
                        Back to Top
                    </Typography>
                </a>
            </Box>
        </Container>
    );
};

export default Footer;
