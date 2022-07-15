import React, {FC, useEffect, useRef, useState} from 'react';
import * as d3 from "d3"
import Modal from "../UI/Modal/Modal";
import {student} from "../../types/student";
import Btn from "../UI/Btn/Btn";
import cl from "./PieChart.module.css"

interface PieChartModalProps {
    data: Array<student>;
    visible: boolean;
    setVisible(arg0: boolean): any;
}

const width = 450,
    height = 450,
    margin = 40;

const enum diagramTypes {
    UNSATISFACTORY = "UNSATISFACTORY",
    GOOD = "GOOD",
    EXCELLENT = "EXCELLENT"
}

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
const radius = Math.min(width, height) / 2 - margin

const PieChartModal: FC<PieChartModalProps> = ({setVisible, visible, data}) => {

    const [diagramType, setDiagramType] = useState(diagramTypes.UNSATISFACTORY)
    const [preparedData, setPreparedData] = useState({})
    const svgRef = useRef(null)
    useEffect(() => {
        if (diagramType === diagramTypes.UNSATISFACTORY)
            setPreparedData({
                FEE: data.filter((student) => (!student.isSatisfactory && student.faculty === "FEE")).length,
                FAM: data.filter((student) => (!student.isSatisfactory && student.faculty === "FAM")).length,
                FE: data.filter((student) => (!student.isSatisfactory && student.faculty === "FE")).length
            })
        if (diagramType === diagramTypes.GOOD)
            setPreparedData({
                FEE: data.filter((student) => (student.avgMarks > 75 && student.faculty === "FEE")).length,
                FAM: data.filter((student) => (student.avgMarks > 75 && student.faculty === "FAM")).length,
                FE: data.filter((student) => (student.avgMarks > 75 && student.faculty === "FE")).length
            })
        if (diagramType === diagramTypes.EXCELLENT)
            setPreparedData({
                FEE: data.filter((student) => (student.avgMarks > 89 && student.faculty === "FEE")).length,
                FAM: data.filter((student) => (student.avgMarks > 89 && student.faculty === "FAM")).length,
                FE: data.filter((student) => (student.avgMarks > 89 && student.faculty === "FE")).length
            })
    }, [diagramType, data])

    // append the svg object to the div called 'my_dataviz'
    const svgEl = d3.select(svgRef.current)
    svgEl.selectAll("*").remove()
    const svg = svgEl
        .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);

// set the color scale
    const color = d3.scaleOrdinal()
        .range(d3.schemeSet2);

// Compute the position of each group on the pie:
    const pie = d3.pie()
        .value(function (d) {
            //@ts-ignore
            return d[1]
        })

    //@ts-ignore
    const data_ready = pie(Object.entries(preparedData))
// Now I know that group A goes from 0 degrees to x degrees and so on.

// shape helper to build arcs:
    const arcGenerator = d3.arc()
        .innerRadius(0)
        .outerRadius(radius)

    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    svg
        .selectAll('mySlices')
        .data(data_ready)
        .join('path')
        //@ts-ignore
        .attr('d', arcGenerator)
        //@ts-ignore
        .attr('fill', function (d) {
            //@ts-ignore
            return (color(d.data[0]))
        })
        .attr("stroke", "black")
        .style("stroke-width", "2px")
        .style("opacity", 0.7)

// Now add the annotation. Use the centroid method to get the best coordinates
    svg
        .selectAll('mySlices')
        .data(data_ready)
        .join('text')
        //@ts-ignore
        .text(function (d) {
            //@ts-ignore
            return d.data
        })
        .attr("transform", function (d) {
            //@ts-ignore
            return `translate(${arcGenerator.centroid(d)})`
        })
        .style("text-anchor", "middle")
        .style("font-size", 17)
    if(!preparedData)
        return <h1>Wait for loading</h1>
    return (
        <Modal visible={visible} setVisible={setVisible}>
            <div>Number of {diagramType.toLowerCase()} students</div>
            <svg width={width} height={height} ref={svgRef}>
            </svg>
            <div className={cl.btns}>
                <Btn onClick={() => setDiagramType(diagramTypes.UNSATISFACTORY)} type={"danger"}>Unsatisfactory</Btn>
                <Btn onClick={() => setDiagramType(diagramTypes.GOOD)}>Good</Btn>
                <Btn onClick={() => setDiagramType(diagramTypes.EXCELLENT)} type={"safe"}>Excellent</Btn>
            </div>
        </Modal>

    );
};
//@ts-ignore
export default PieChartModal;