import React, {FC} from "react";

interface option{
    value: string,
    name: string
}

interface SelectProps{
    options: Array<option>
    defaultValue: any,
    value: any,
    onChange: any
}

const Select:FC<SelectProps> = ({ options, defaultValue, value, onChange }) => {
    return (
        <select value={value} onChange={(e) => onChange(e.target.value)}>
            <option disabled value="">
                {defaultValue}
            </option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            ))}
        </select>
    );
};

export default Select;