import httpRequest from "../httpRequest";
import { AdditionalInfo, Categories } from "./interfaces";

const fetchEvents = (
    daysCount: string,
    status: string,
    category?: string | number
) => {
    return httpRequest<AdditionalInfo>({
        url: `https://eonet.sci.gsfc.nasa.gov/api/v2.1/${
            category ? `categories/${category}` : "events"
        }?days=${daysCount}&status=${status}`,
        method: "GET",
    });
};

const fetchCategories = () => {
    return httpRequest<Categories>({
        url: `  https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories`,
        method: "GET",
    });
};

export { fetchEvents, fetchCategories };
