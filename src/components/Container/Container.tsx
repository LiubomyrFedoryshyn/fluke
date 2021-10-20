import React, { FC } from "react";
import { SContainer } from "./styles";

interface IContainer {
    children: any;
}

const Container: FC<IContainer> = ({ children }) => {
    return <SContainer>{children}</SContainer>;
};

export default Container;
