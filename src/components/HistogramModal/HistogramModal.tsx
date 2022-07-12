import React, {FC} from 'react';
import Modal from "../UI/Modal/Modal";
import Histogram from "../Histogram/Histogram";

interface HistogramModalProps{
    visible: boolean;
    setVisible(arg0: boolean): any;
    data: Array<any>
}

const HistogramModal:FC<HistogramModalProps> = ({visible, setVisible, data}) => {
    return (
            <Modal visible={visible} setVisible={setVisible}>
                <Histogram data={data}/>
            </Modal>
    );
};

export default HistogramModal;