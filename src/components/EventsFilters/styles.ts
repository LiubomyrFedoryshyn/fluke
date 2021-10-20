import styled from "styled-components";
import { mainColor, grayColor, darkGrayColor } from "../../utils/colors";

const SFilters = styled.div({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    margin: "15px 0",
    ".react-datepicker-wrapper": {
        width: "fit-content",
        height: "fit-content",
        input: {
            border: `1px solid ${darkGrayColor}`,
            borderRadius: 4,
            fontSize: 16,
            padding: "9px 15px",
        },
    },
    ".custom-select": {
        ".select__control": {
            borderColor: darkGrayColor,
            width: 180,
            height: 38,
        },
        ".select__option--is-selected": {
            backgroundColor: mainColor,
        },
    },
    ".order": {
        transition: "0.3s",
        cursor: "pointer",
        fontSize: 20,
        backgroundColor: grayColor,
        borderRadius: 4,
        height: 25,
        padding: "5px 15px",
        border: `1px solid ${darkGrayColor}`,
        p: {
            transition: "0.3s",
            margin: 0,
            color: mainColor,
        },
        "&:hover": {
            opacity: "0.5",
        },
        "&.desc": {
            p: {
                transform: "rotate(180deg)",
            },
        },
    },
});

const SItem = styled.div({
    marginLeft: 15,
    p: {
        color: darkGrayColor,
        margin: 0,
        marginBottom: 5,
    },
});

export { SFilters, SItem };
