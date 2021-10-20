import React, { FC } from "react";
import { SLoader } from "./styles";

interface ILoader {
    loading: boolean;
}

const Loader: FC<ILoader> = ({ loading }) => {
    if (!loading) {
        return null;
    }

    return <SLoader />;
};

export default Loader;
