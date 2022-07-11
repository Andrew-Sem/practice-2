import {FC} from "react";
import cl from "./Histogram.module.css"
import {country} from "../../types/country";

interface MarksProps{
    data: Array<country>,
    xScale: any,
    yScale: any,
    xValue: any,
    yValue: any,
    tooltipFormat: any
}

const Marks:FC<MarksProps> = ({data, xScale, yScale, xValue, yValue, tooltipFormat}) => {
    return (
        <>
            {data.map(d => (<rect
                className={cl.mark}
                key={yValue(d)}
                x={0}
                y={yScale(yValue(d))}
                width={xScale(xValue(d))}
                height={yScale.bandwidth()}
            >
                <title>{tooltipFormat(xValue(d))}</title>
            </rect>))}
        </>
    );
};

export default Marks;