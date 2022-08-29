import { createContext, useState } from "react";

export const ModalContext = createContext({
    isModalOpen: false,
    toggleModal: () => { }
})

export const ModalContextProvider = ({ children }) => {
    const [isModalOpen, toggleModal] = useState(false);
    return (
        <ModalContext.Provider value={{ isModalOpen, toggleModal }}>
            {children}
        </ModalContext.Provider>
    )
}