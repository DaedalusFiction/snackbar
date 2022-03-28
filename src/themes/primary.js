import { createTheme } from "@mui/material";

const FCAccent = "#FE1D1D";
const FCLight = "#2c2c2c";
const FCDark = "#353535";

const primary = createTheme({
    palette: {
        type: "light",
        primary: {
            main: "#f11111",
        },
        secondary: {
            main: "#f50057",
        },
        background: {
            default: "#FFC700",
        },
    },
    typography: {
        h1: {
            fontFamily: "Montserrat",
            fontSize: "5.8rem",
            lineHeight: 1.14,
            letterSpacing: "0em",
        },
        h2: {
            fontFamily: "Shrikhand",
            fontSize: "2.5rem",
            color: FCDark,
            marginBottom: ".5em",
        },
        h3: {
            fontFamily: "Shrikhand",
            fontSize: "2.7rem",
            color: FCAccent,
        },
        h4: {
            fontFamily: "Shrikhand",
            color: FCAccent,
        },
        p: {
            fontFamily: "EB Garamond",
            fontSize: "1.5rem",
            lineHeight: "1.3em",
        },
    },
    custom: {
        hero: {
            fontFamily: "Fredoka One",
            fontSize: "max(6rem, 27vw)",
            textAlign: "center",
            color: FCAccent,
            lineHeight: 0.77,
            letterSpacing: "0em",

            // WebkitTextStroke: "1px black",
            zIndex: 0,
        },
        // scroller: {
        //     fontFamily: "Notable",
        //     fontSize: "2rem",
        //     color: "#999999",
        //     letterSpacing: ".15em",
        //     top: 0,
        //     left: 0,
        //     zIndex: -1,
        //     whiteSpace: "nowrap",
        // },
        // scrollerOverlay: {
        //     fontFamily: "Notable",
        //     top: 0,
        //     left: 0,
        //     fontSize: "2rem",
        //     color: "transparent",
        //     WebkitTextStroke: "2px #999999",
        //     letterSpacing: ".15em",
        //     zIndex: 3,
        //     whiteSpace: "nowrap",
        // },
        // "@keyframes scrollerLeft": {
        //     "0%": {
        //         transform: "translateX(0))",
        //     },
        //     "50%": {
        //         transform: "translateX(1)",
        //     },
        //     "100%": {
        //         transform: "translateX(0)",
        //     },
        // },
    },
});

export { primary };
