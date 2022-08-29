import { useContext } from "react";
import { ModalContext } from "../../context/modal/modal.context";

import "./modal.styles.scss";

const Modal = ({ children }) => {
    const { toggleModal } = useContext(ModalContext);
    return (
        <div className="modal-container">
            <div className="modal-background"></div>
            <div className="modal-wrapper">
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal;