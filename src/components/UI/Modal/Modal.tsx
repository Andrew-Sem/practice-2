import cl from "./Modal.module.css";
import {FC} from "react";

interface ModalProps{
    children?: any;
    visible: boolean;
    setVisible(arg0: boolean): void
}

const Modal:FC<ModalProps> = ({ children, visible, setVisible }) => {
    const rootClasses = [cl.modal];
    if (visible) {
        rootClasses.push(cl.active);
    }

    return (
        <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
            <div className={cl.modalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Modal