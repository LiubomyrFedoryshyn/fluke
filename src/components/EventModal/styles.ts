import styled from "styled-components";
import { darkGrayColor } from "../../utils/colors";

const SModalContent = styled.div({
    width: 500,
    position: "relative",
    ".close": {
        margin: 0,
        position: "absolute",
        right: 0,
        top: -12,
        cursor: "pointer",
        transition: "0.3s",
        color: darkGrayColor,
        "&:hover": {
            opacity: "0.5",
        },
    },
    h3: {
        "&:first-of-type": {
            marginTop: 0,
        },
    },
    h5: {
        color: darkGrayColor,
        "&:last-of-type": {
            marginBottom: 0,
        },
    },
    "@media only screen and (max-width: 768px)": {
        width: 425,
    },
    "@media only screen and (max-width: 425px)": {
        width: 320,
    },
    "@media only screen and (max-width: 320px)": {
        width: 270,
    },
});

export { SModalContent };
