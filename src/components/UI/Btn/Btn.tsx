import React, {FC} from 'react';
import cl from './Btn.module.css'
import {student} from "../../../types/student";

interface BtnProps{
    children?: any;
    onClick?(arg0:any):void;
}

const Btn:FC<BtnProps> = ({ children, ...props}) => {
    return (
        <button className={cl.btn} {...props}>
            {children}
        </button>
    );
}

export default Btn;