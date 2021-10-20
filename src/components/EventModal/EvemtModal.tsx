import React, { FC } from "react";
import Modal from "react-modal";
import { IEvents } from "../../services/api/rest/interfaces";
import { SModalContent } from "./styles";

interface IModal {
    eventModalOpened: boolean;
    setEventModalOpened: (value: boolean) => void;
    eventDetails: IEvents | null;
}

const EventModal: FC<IModal> = ({
    eventModalOpened,
    setEventModalOpened,
    eventDetails,
}) => {
    if (!eventModalOpened) {
        return null;
    }

    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
        },
    };

    return (
        <Modal
            appElement={document.getElementById("root") as HTMLElement}
            isOpen={eventModalOpened}
            onRequestClose={() => setEventModalOpened(false)}
            style={customStyles}
            contentLabel="Event Modal"
        >
            <SModalContent>
                <p className="close" onClick={() => setEventModalOpened(false)}>
                    X
                </p>
                <h3>{eventDetails?.title}</h3>
                <h3>{eventDetails?.description}</h3>
                <h3>{eventDetails?.id}</h3>
                <h4>Categories:</h4>
                {eventDetails?.categories.map((el: any) => (
                    <h5 key={el.id}>{el.title}</h5>
                ))}
                <h4>Sources:</h4>
                {eventDetails?.sources.map((el: any) => (
                    <h5 key={el.id}>{el.id}</h5>
                ))}
            </SModalContent>
        </Modal>
    );
};

export default EventModal;
