import { Box } from "@mui/material";
import React from "react";

const Scroller = ({ bandlist }) => {
    const bandlistA =
        "THE RAMONES THE KINKS THE SONICS THE KINGSMEN ? AND THE MYSTERIANS THE DETROIT COBRAS ";
    const bandlistB =
        "THE WHITE STRIPES WEEZER THE DANDY WARHOLS THE STOOGES THE PIXIES TV ON THE RADIO";
    const baseStyle = {
        fontFamily: "Notable",
        fontSize: "max(.55rem, 2.5vw)",
        // fontSize: { xs: "2.5vw", md: "2.5vw" },
        color: "#999999",
        letterSpacing: ".15em",
        zIndex: -1,
        whiteSpace: "nowrap",
        position: "relative",
        opacity: "50%",
        // overflow: "hidden",
    };
    const overlayStyle = {
        fontFamily: "Notable",
        fontSize: "max(.55rem, 2.5vw)",
        // fontSize: { xs: "2.5vw", md: "2.5vw" },
        color: "transparent",
        WebkitTextStroke: "1px #999999",
        letterSpacing: ".15em",
        zIndex: 3,
        whiteSpace: "nowrap",
        position: "relative",
        opacity: "50%",
    };

    return (
        <Box
            sx={{
                position: "relative",
            }}
        >
            <div className={"slider" + bandlist} style={baseStyle}>
                {bandlist === "A" ? bandlistA : bandlistB}
            </div>
            <div
                className={"slider" + bandlist + "-overlay"}
                style={overlayStyle}
            >
                {bandlist === "A" ? bandlistA : bandlistB}
            </div>
        </Box>
    );
};

export default Scroller;
