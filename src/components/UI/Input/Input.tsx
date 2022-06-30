import cl from "./Input.module.css";
import {FC} from "react";

interface InputProps{
    placeholder: string
}

const Input:FC<InputProps> = ({placeholder}) => {
    return <input className={cl.input} placeholder={placeholder}/>;
}

export default Input