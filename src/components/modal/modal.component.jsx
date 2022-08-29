import { useContext, useRef } from "react";
import { ModalContext } from "../../context/modal/modal.context";

import "./modal.styles.scss";

const Modal = ({ children }) => {
    const { toggleModal, setModalContent } = useContext(ModalContext);
    const modalWrapperRef = useRef(null);
    const handleOnClick = ({ target }) => {
        if (target === modalWrapperRef.current) {
            toggleModal(false);
            setModalContent("");
        }
    }
    return (
        <div className="modal-container">
            <div className="modal-background"></div>
            <div className="modal-wrapper" ref={modalWrapperRef} onClick={handleOnClick}>
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal;