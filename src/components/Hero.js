import { Container, Typography, Box } from "@mui/material";
import { primary } from "../themes/primary";
import Scroller from "./Scroller";

const Hero = () => {
    return (
        <Container id="hero" maxWidth="xl">
            <Box sx={{ position: "relative", overflow: "hidden" }}>
                <Box>
                    <Scroller bandlist="A" />
                    <Scroller bandlist="B" />
                    <Scroller bandlist="A" />
                    <Scroller bandlist="B" />
                    <Scroller bandlist="A" />
                    <Scroller bandlist="B" />
                </Box>
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                    }}
                >
                    <Typography style={primary.custom.hero} variant="h1">
                        SNAC
                    </Typography>

                    <Typography style={primary.custom.hero} variant="h1">
                        KBAR
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default Hero;
