import React, { useEffect, useState } from "react";
import EventsTable from "./components/EventsTable";
import { AdditionalInfo } from "./services/api/rest/interfaces";

import { fetchEvents } from "./services/api/rest/methods";

const EventApp = () => {
    useEffect(() => {
        getEvents();
    }, []);

    const [tableInfo, setTableInfo] = useState<AdditionalInfo>({
        title: "",
        description: "",
        events: [],
        link: "",
    });

    const getEvents = async () => {
        try {
            const res: any = await fetchEvents();
            setTableInfo({
                title: res?.data?.title,
                description: res?.data?.description,
                events: res?.data?.events,
                link: res?.data?.link,
            });
            return res?.data;
        } catch (err) {
            console.log("err", err);
        }
    };

    return <EventsTable tableInfo={tableInfo} events={tableInfo.events} />;
};

export default EventApp;
