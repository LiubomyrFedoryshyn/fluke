import httpRequest from "../httpRequest";
import { AdditionalInfo } from "./interfaces";

const fetchEvents = () => {
    return httpRequest<AdditionalInfo>({
        url: `https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?limit=5`,
        method: "GET",
    });
};

export { fetchEvents };
