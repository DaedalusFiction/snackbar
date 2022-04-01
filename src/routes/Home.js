import {
    Box,
    Container,
    Grid,
    Typography,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    IconButton,
    Button,
    TextField,
    Paper,
} from "@mui/material";

import Hero from "../components/Hero";
import mixer from "../assets/images/mixer.jpg";
import guitar1 from "../assets/images/guitar1.jpg";
import bass from "../assets/images/bass.jpg";
import keyboard from "../assets/images/keyboard.jpg";
import drums1 from "../assets/images/drums1.jpg";
import drums2 from "../assets/images/drums2.jpg";

const Home = () => {
    return (
        <>
            <Hero />

            <Container maxWidth="lg">
                <Grid id="about" className="about" container spacing={2}>
                    <Grid item container xs={12} md={8}>
                        <Grid item xs={12}>
                            <Typography
                                variant="h2"
                                sx={{
                                    textAlign: "center",
                                    marginBottom: 0,
                                }}
                            >
                                Charlottesville's Best Covers!
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ padding: ".5em" }}>
                            <Typography
                                // variant="p"
                                sx={{
                                    fontFamily: "EB Garamond",
                                    fontSize: "1.5rem",
                                    lineHeight: "1.3em",
                                }}
                                align="justify"
                            >
                                SNACK BAR plays all of the best music that cool
                                thirty-somethings love and cherish. Whether you
                                grew up listening to classic rock, punk, or
                                "alternative", SNACK BAR is sure to play
                                something that will get your foot tapping and
                                your lips reaching for that limited-edition
                                craft beer. But it isn't just about the music:
                                All of our members have neck-length or longer
                                hair, and Greg, our guitarist/vocalist, has that
                                rustic three-day-old beard you've all come to
                                expect and associate with meaningful jams.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ padding: ".5em" }}>
                            <Typography
                                // variant="p"
                                sx={{
                                    fontFamily: "EB Garamond",
                                    fontSize: "1.5rem",
                                    lineHeight: "1.3em",
                                    textAlign: "justify",
                                }}
                            >
                                Founded during the pandemic of '21-22, SNACK BAR
                                is comprised of the aforementioned Greg, Emily
                                on the bass, Dave on the drums, and Emma rocking
                                the keyboard and the tambourine, sometimes
                                simultaneously. The best part? SNACK BAR also
                                accepts requests, though please be aware that at
                                this time we are limited to only songs we
                                already know, most of which appear in the set
                                list already--but we're happy to play them
                                again!
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} md={4}>
                        {/* <img src={mixer} alt="mixer" /> */}
                        <img src={keyboard} alt="mixer" />
                        <img src={guitar1} alt="mixer" />
                        <img src={drums1} alt="mixer" />
                        {/* <img src={drums2} alt="mixer" /> */}
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        borderBottom: "1px solid var(--fc-accent)",
                        paddingBottom: "2rem",
                        marginBottom: "2rem",
                    }}
                />

                <Grid container spacing={6}>
                    <Grid item xs={12} md={7}>
                        <img src={bass} alt="bass guitar" />
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Typography
                            id="shows"
                            variant="h2"
                            sx={{ textAlign: "center" }}
                        >
                            Upcoming Shows
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginBottom: "1em",
                            }}
                        >
                            <Box>
                                <Typography variant="p">
                                    March 28, 2022
                                </Typography>
                                <br />
                                <Typography variant="p">4:30 pm</Typography>
                            </Box>
                            <Typography variant="p">Dave's Basement</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginBottom: "1em",
                            }}
                        >
                            <Box>
                                <Typography variant="p">
                                    March 30, 2022
                                </Typography>
                                <br />
                                <Typography variant="p">4:30 pm</Typography>
                            </Box>
                            <Typography variant="p">Dave's Basement</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginBottom: "1em",
                            }}
                        >
                            <Box>
                                <Typography variant="p">
                                    April 9, 2022
                                </Typography>
                                <br />
                                <Typography variant="p">8:30 pm</Typography>
                            </Box>
                            <Typography variant="p">Greg & Emily's</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        borderBottom: "1px solid var(--fc-accent)",
                        paddingBottom: "2rem",
                        marginBottom: "2rem",
                    }}
                />
                <Grid id="contact" container sx={{ margin: "3em 0" }}>
                    <Grid
                        item
                        xs={12}
                        sm={7}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Typography
                            variant="h2"
                            textAlign="center"
                            sx={{ fontSize: "max(3em, 6vw)" }}
                        >
                            Get in Touch
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={5}
                        sx={{ display: "flex", justifyContent: "center" }}
                    >
                        <form
                            name="contact"
                            method="post"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                width: "35ch",
                                gap: "1em",
                            }}
                        >
                            <input
                                type="hidden"
                                name="form-name"
                                value="contact"
                            />
                            <TextField
                                id="name"
                                name="name"
                                label="Name"
                                variant="outlined"
                            />
                            <TextField
                                id="tel"
                                name="tel"
                                label="Telephone"
                                variant="outlined"
                            />
                            <TextField
                                id="email"
                                name="email"
                                label="Email"
                                variant="outlined"
                            />
                            <TextField
                                id="message"
                                label="Message"
                                name="message"
                                multiline
                                minRows={4}
                            />

                            <Button variant="contained" type="submit">
                                Send
                            </Button>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Home;
