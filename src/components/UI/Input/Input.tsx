import cl from "./Input.module.css";
import {FC} from "react";

interface InputProps {
    placeholder?: string,
    value: string | number | undefined,
    type?: string,
    label?: string,
    onChange?(e: any): void
}

const Input: FC<InputProps> = ({label, ...props}) => {
    return (
        <label className={cl.label} >
            {label}
            <input className={cl.input} {...props} />
        </label>
    )
}

export default Input