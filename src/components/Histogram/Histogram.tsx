import React, {FC, useEffect, useState} from 'react';
import {format, max, scaleBand, scaleLinear} from "d3"
import {AxisBottom} from "./AxisBottom";
import AxisLeft from "./AxisLeft";
import Marks from "./Marks";
import cl from "./Histogram.module.css"
import {findBiggestObjByFieldLength} from "../../utils/findBiggestObjByField";
import {student} from "../../types/student";
import {useSortedStudents} from "../../hooks/useStudents";

const width = 700;
const height = 400;
const xAxisLabelOffset = 50;

interface HistogramProps {
    data: Array<student>
}


const Histogram: FC<HistogramProps> = ({data}) => {
    const sortedStudents: Array<student> = useSortedStudents(data, "avgMarks")
    const preparedDataArray: Array<student> = sortedStudents.slice(-10)
    if (!data.length)
        return <h1>Loading..</h1>
    const margin = {
        top: 20,
        right: 30,
        bottom: 65,
        left: 90
    }

    const innerHeight = height - margin.top - margin.bottom;
    const innerWidth = width - margin.left - margin.right;

    const yValue = (d: student) => d.surname;
    const xValue = (d: student) => d.avgMarks;

    const siFormat = format('');
    const xAxisTickFormat = (tickValue: any) => siFormat(tickValue).replace('G', 'B');

    const yScale = scaleBand()
        .domain(preparedDataArray.map(yValue))
        .range([0, innerHeight])
        .paddingInner(0.15);

    const xScale = scaleLinear()
        .domain([0, max(preparedDataArray, xValue) as number])
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
                    Top students
                </text>
                <Marks
                    data={preparedDataArray}
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