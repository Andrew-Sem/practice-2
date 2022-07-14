import {FC} from "react";
import cl from "./Histogram.module.css"

interface AxisBottomProps{
    xScale: any,
    innerHeight: number,
    tickFormat: any
}

export const AxisBottom:FC<AxisBottomProps> = ({ xScale, innerHeight, tickFormat }) =>{
    return (xScale.ticks().map((tickValue:any) => (
        <g className={cl.tick} key={tickValue} transform={`translate(${xScale(tickValue)},0)`}>
            <line y2={innerHeight} />
            <text style={{ textAnchor: 'middle' }} dy=".71em" y={innerHeight + 3}>
                {tickFormat(tickValue)}
            </text>
        </g>
    )))
}
