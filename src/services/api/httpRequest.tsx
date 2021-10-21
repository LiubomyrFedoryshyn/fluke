import axios from "axios";

interface IBody<T> {
    url: string;
    method: string | any;
    params?: object;
    headers?: object;
    data?: T;
}

const httpRequest = async <T,>({
    url = "/",
    method = "GET",
    params = {},
    headers = {},
    data,
}: IBody<T>) => {
    const authHeaders: any = {
        ...headers,
    };

    const response = await axios({
        url,
        method,
        params,
        headers: {
            ...authHeaders,
        },
        data,
    });

    return response;
};

export default httpRequest;
