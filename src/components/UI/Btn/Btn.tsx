import React, {FC} from 'react';
import cl from './Btn.module.css'

interface BtnProps{
    children?: any;
    type?: string;
    onClick?(arg0:any):void;
}

const Btn:FC<BtnProps> = ({ children,type, ...props}) => {
    let rootClasses = [cl.btn]
    if(type === "danger")
        rootClasses.push(cl.btn_danger)
    if(type === "safe")
        rootClasses.push(cl.btn_safe)
    return (
        <button className={rootClasses.join(" ")} {...props}>
            {children}
        </button>
    );
}

export default Btn;