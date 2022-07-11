import {FC} from "react";

interface AxisLeftProps{
    yScale: any
}

const AxisLeft: FC<AxisLeftProps> = ({yScale}) =>
    yScale.domain().map((tickValue:any) => (
        <g className="tick" key={tickValue} >
            <text
                style={{textAnchor: 'end'}}
                x={-3}
                dy=".32em"
                y={yScale(tickValue) + yScale.bandwidth() / 2}
            >
                {tickValue}
            </text>
        </g>
    ));

export default AxisLeft