import React, { FC } from "react";
import { IEvents, AdditionalInfo } from "../../services/api/rest/interfaces";
import { STable } from "./styles";

interface ITable {
    events: IEvents[];
    tableInfo: AdditionalInfo;
}

const EventsTable: FC<ITable> = ({ events, tableInfo }) => {
    return (
        <STable>
            <h1>{tableInfo.title}</h1>
            <h2>{tableInfo.description}</h2>
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
                            <tr key={el.id}>
                                <td>{el.title}</td>
                                <td>{el.description || "-"}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </STable>
    );
};

export default EventsTable;
