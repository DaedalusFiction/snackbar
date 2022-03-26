import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

const Header = () => {
    return (
        <Container maxWidth="xl">
            <Box
                sx={{
                    display: { xs: "none", md: "flex" },
                    justifyContent: "space-between",
                    margin: "1em 0",
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
