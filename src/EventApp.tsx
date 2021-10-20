import React, { useEffect, useState } from "react";
import Container from "./components/Container";
import EventsFilters from "./components/EventsFilters";
import EventsTable from "./components/EventsTable";
import { AdditionalInfo } from "./services/api/rest/interfaces";

import { fetchEvents } from "./services/api/rest/methods";
import { DEFAULT_CATEGORY, STATUS_OPTIONS } from "./utils/constants";

const EventApp = () => {
    const [tableInfo, setTableInfo] = useState<AdditionalInfo>({
        title: "",
        description: "",
        events: [],
        link: "",
    });
    const [daysCount, setDaysCount] = useState("0");
    const [status, setStatus] = useState(STATUS_OPTIONS[0].value);
    const [category, setCategory] = useState<string | number>(
        DEFAULT_CATEGORY.value
    );
    const [order, setOrder] = useState("asc");

    useEffect(() => {
        getEvents();
    }, [daysCount, status, category]);

    const getEvents = async () => {
        try {
            const res: any = await fetchEvents(daysCount, status, category);
            setTableInfo(res?.data);
        } catch (err) {
            console.log("err", err);
        }
    };

    const changeOrder = () => {
        if (order === "asc") {
            setOrder("desc");
        } else {
            setOrder("asc");
        }
        setTableInfo({ ...tableInfo, events: tableInfo.events.reverse() });
    };

    return (
        <Container>
            <EventsFilters
                order={order}
                setOrder={changeOrder}
                setCategory={setCategory}
                setStatus={setStatus}
                setDaysCount={setDaysCount}
            />

            <EventsTable tableInfo={tableInfo} events={tableInfo.events} />
        </Container>
    );
};

export default EventApp;
