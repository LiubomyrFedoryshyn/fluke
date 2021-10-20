import React, { FC, useState } from "react";
import { IEvents, AdditionalInfo } from "../../services/api/rest/interfaces";
import EventModal from "../EventModal/EvemtModal";
import { STable } from "./styles";

interface ITable {
    events: IEvents[];
    tableInfo: AdditionalInfo;
}

const EventsTable: FC<ITable> = ({ events, tableInfo }) => {
    const [eventModalOpened, setEventModalOpened] = useState<boolean>(false);

    return (
        <STable>
            <h1>{tableInfo.title}</h1>
            <h2>{tableInfo.description}</h2>
            {events.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((el) => {
                            return (
                                <tr
                                    onClick={() => setEventModalOpened(true)}
                                    className={el.closed ? "closed" : "opened"}
                                    key={el.id}
                                >
                                    <td>{el.title}</td>
                                    <td>{el.description || "-"}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            ) : (
                <h1>No events found</h1>
            )}
            {eventModalOpened && <EventModal />}
        </STable>
    );
};

export default EventsTable;
