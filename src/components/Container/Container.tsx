import React, { FC } from "react";
import { SContainer, SContainerContent } from "./styles";

interface IContainer {
    children: any;
}

const Container: FC<IContainer> = ({ children }) => {
    return (
        <SContainer>
            <SContainerContent>{children}</SContainerContent>
        </SContainer>
    );
};

export default Container;
