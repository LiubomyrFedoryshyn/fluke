import styled from "styled-components";
import { darkGrayColor, grayColor } from "../../utils/colors";

const STable = styled.div({
    // minHeight: "calc(100vh - 68px)",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    marginBottom: 50,
    "h1, h2": {
        textAlign: "center",
    },
    table: {
        border: `1px solid ${darkGrayColor}`,
        "th, td": {
            padding: "5px 15px",
        },

        tr: {
            td: {
                borderTop: `1px solid ${darkGrayColor}`,
                borderRight: `1px solid ${darkGrayColor}`,
                "&:last-of-type": {
                    borderRight: 0,
                },
            },
        },
        tbody: {
            tr: {
                cursor: "pointer",
                transition: "0.3s",
                "&.closed": {
                    backgroundColor: grayColor,
                },
                "&:hover": {
                    opacity: 0.5,
                },
            },
        },
    },
});

export { STable };
