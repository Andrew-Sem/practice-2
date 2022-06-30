import React, {FC} from 'react';
import cl from './Btn.module.css'

interface BtnProps{
    children?: any;
}

const Btn:FC<BtnProps> = ({ children}) => {
    return (
        <button className={cl.btn}>
            {children}
        </button>
    );
}

export default Btn;