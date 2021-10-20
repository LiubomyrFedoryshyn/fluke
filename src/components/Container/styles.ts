import styled from "styled-components";

const SContainer = styled.div({
    margin: "0 auto",
    "@media only screen and (min-width: 1382px)": {
        maxWidth: 1255,
        padding: "0 15px",
    },
    "@media only screen and (max-width: 1382px)": {
        maxWidth: "100%",
        padding: "0 10px",
    },
    "@media only screen and (max-width: 1200px)": {
        maxWidth: 1045,
    },
    "@media only screen and (max-width: 991px)": {
        maxWidth: 840,
    },
    "@media only screen and (max-width: 768px)": {
        maxWidth: 630,
    },
});

const SContainerContent = styled.div({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
});

export { SContainer, SContainerContent };
