import styled from "styled-components";
import { whiteColor } from "../../utils/colors";

const SLoader = styled.div({
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100%",
    opacity: "0.7",
    backgroundColor: whiteColor,
    zIndex: 2,
});

export { SLoader };
