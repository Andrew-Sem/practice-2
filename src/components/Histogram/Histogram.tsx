import React from 'react';
import {format, max, scaleBand, scaleLinear} from "d3"
import {AxisBottom} from "./AxisBottom";
import AxisLeft from "./AxisLeft";
import Marks from "./Marks";
import cl from "./Histogram.module.css"
import {findBiggestObjByFieldLength} from "../../utils/findBiggestObjByField";
import {student} from "../../types/student";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const width = 700;
const height = 400;
const xAxisLabelOffset = 50;

const Histogram = () => {
    const {error, loading, students} = useTypedSelector(state => state.student)

    const data = students
    if(!data.length){
        return <h1>Loading..</h1>
    }

    const margin = {
        top: 20,
        right: 30,
        bottom: 65,
        // find the biggest country by her name length and set 9px for 1 symbol
        // left: findBiggestObjByFieldLength(data, "education.speciality").education.speciality.length * 9};
        left: 50}

    const innerHeight = height - margin.top - margin.bottom;
    const innerWidth = width - margin.left - margin.right;

    const yValue = (d: student) => d.speciality;
    const xValue = (d: student) => d.avgMarks;

    const siFormat = format('.2s');
    const xAxisTickFormat = (tickValue: any) => siFormat(tickValue).replace('G', 'B');

    const yScale = scaleBand()
        .domain(data.map(yValue))
        .range([0, innerHeight])
        .paddingInner(0.15);

    const xScale = scaleLinear()
        .domain([0, max(data, xValue) as number])
        .range([0, innerWidth]);

    return (
        <svg width={width} height={height}>
            <g transform={`translate(${margin.left},${margin.top})`}>
                <AxisBottom
                    xScale={xScale}
                    innerHeight={innerHeight}
                    tickFormat={xAxisTickFormat}
                />
                <AxisLeft yScale={yScale}/>
                <text
                    className={cl.axisLabel}
                    x={innerWidth / 2}
                    y={innerHeight + xAxisLabelOffset}
                    textAnchor="middle"
                >
                    Population
                </text>
                <Marks
                    data={data}
                    xScale={xScale}
                    yScale={yScale}
                    xValue={xValue}
                    yValue={yValue}
                    tooltipFormat={xAxisTickFormat}
                />
            </g>
        </svg>
    );
}

export default Histogram;