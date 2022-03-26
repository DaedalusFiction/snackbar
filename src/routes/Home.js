import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Hero from "../components/Hero";
import mixer from "../assets/images/mixer.jpg";

const Home = () => {
    return (
        <>
            <Hero />
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item container xs={12} md={8}>
                        <Grid item xs={12}>
                            <Typography variant="h2">
                                Charlottesville's Greatest Covers!
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <img src={mixer} alt="mixer" />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Home;
