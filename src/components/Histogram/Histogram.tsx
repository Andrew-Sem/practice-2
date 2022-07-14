import React, {FC, useEffect, useState} from 'react';
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

interface HistogramProps {
    data: Array<student>
}

interface preparedData{
    name: string,
    count: number
}

const Histogram: FC<HistogramProps> = ({data}) => {
    const [histogramType, setHistogramType] = useState("faculty")

    let countFEE = 0, countFAM = 0, countFE = 0
    for (let item of data) {
        if (item.faculty === "FEE")
            countFEE++
        if (item.faculty === "FAM")
            countFAM++
        if (item.faculty === "FE")
            countFE++
    }
    const preparedDataArray:Array<preparedData> = [
        {
            name: "FEE",
            count: countFEE
        },
        {
            name: "FAM",
            count: countFAM
        },
        {
            name: "FE",
            count: countFE
        }
    ]

    if (!data.length)
        return <h1>Loading..</h1>
    const margin = {
        top: 20,
        right: 30,
        bottom: 65,
        // find the biggest country by her name length and set 9px for 1 symbol
        // left: findBiggestObjByFieldLength(data, "education.speciality").education.speciality.length * 9};
        left: 50
    }

    const innerHeight = height - margin.top - margin.bottom;
    const innerWidth = width - margin.left - margin.right;

    const yValue = (d:preparedData) => d.name;
    const xValue = (d:preparedData) => d.count;

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
                    Count of students
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