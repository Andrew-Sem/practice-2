import React, {FC} from 'react';
import Modal from "../UI/Modal/Modal";
import Histogram from "../Histogram/Histogram";

interface HistogramModalProps{
    visible: boolean;
    setVisible(arg0: boolean): any
}

const HistogramModal:FC<HistogramModalProps> = ({visible, setVisible}) => {
    return (
            <Modal visible={visible} setVisible={setVisible}>
                <Histogram/>
            </Modal>
    );
};

export default HistogramModal;