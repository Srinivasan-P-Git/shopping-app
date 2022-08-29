import { createContext, useState } from "react";

export const ModalContext = createContext({
    isModalOpen: false,
    toggleModal: () => { },
    modalContent: "",
    setModalContent: () => { }
})

export const ModalContextProvider = ({ children }) => {
    const [isModalOpen, toggleModal] = useState(false);
    const [modalContent, setModalContent] = useState("");
    return (
        <ModalContext.Provider value={{ isModalOpen, toggleModal, setModalContent, modalContent }}>
            {children}
        </ModalContext.Provider>
    )
}