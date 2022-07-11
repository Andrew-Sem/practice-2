import {FC} from "react";
import cl from "./Histogram.module.css"
import {student} from "../../types/student";

interface MarksProps{
    data: Array<student>,
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
                key={d.id}
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