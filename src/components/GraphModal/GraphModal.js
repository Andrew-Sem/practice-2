import React, {useEffect, useRef, useState} from 'react';
import * as d3 from "d3"
import Modal from "../UI/Modal/Modal";

const GraphModal = ({visible, setVisible, data}) => {
    const [studentsCountArr, setStudentsCountArr] = useState([])
    const unsatisfactoryStudents = data.filter(student => !student.isSatisfactory)
    let year2022_2023 = 0, year2021_2022 = 0, year2020_2021 = 0, year2019_2020 = 0, year2018_2019 = 0
    unsatisfactoryStudents.forEach((student) => {
        if (student.year == "2022/2023") year2022_2023++
        if (student.year == "2021/2022") year2021_2022++
        if (student.year == "2020/2021") year2020_2021++
        if (student.year == "2019/2020") year2019_2020++
        if (student.year == "2018/2019") year2018_2019++
    })
    useEffect(() => {
        const year2023_2024 = year2022_2023 + (year2022_2023 - year2018_2019)/4
        const year2024_2025 = year2023_2024 + (year2023_2024 - year2018_2019)/5
        setStudentsCountArr([year2018_2019, year2019_2020, year2020_2021, year2021_2022, year2022_2023, year2023_2024, year2024_2025])
    }, [data])
    const svgRef = useRef(null)
    const width = 500
    const height = 200
    useEffect(() => {
        //setting up svg
        const svgEl = d3.select(svgRef.current)
        svgEl.selectAll("*").remove()
        const svg = svgEl
            // .style("background", "#d3d3d3")
            .style("overflow", "visible")
        //setting the scaling
        const xScale = d3.scaleLinear()
            .domain([0, studentsCountArr.length - 1])
            .range([0, width])
        const yScale = d3.scaleLinear()
            .domain([0, height])
            .range([height, 0])
        const generateScaledLine = d3.line()
            .x((d, i) => xScale(i))
            .y(yScale)
            .curve(d3.curveCardinal)

        //setting the axes
        const xAxis = d3.axisBottom(xScale)
            .ticks(studentsCountArr.length)
            .tickFormat(i => i + 2018)

        const yAxis = d3.axisLeft(yScale)
            .ticks(5)
            .scale(yScale)

        svg.append("g")
            .call(xAxis)
            .attr('transform', `translate(0, ${height})`)
        svg.append("g")
            .call(yAxis)

        //setting up the data for the svg
        svg.selectAll(".line")
            .data([studentsCountArr])
            .join("path")
            .attr("d", d => generateScaledLine(d))
            .attr("fill", "none")
            .attr("stroke", "#0047FF")
    }, [studentsCountArr])


    return (<Modal visible={visible} setVisible={setVisible}>
            <h2>Unsatisfactory students</h2>
            <svg ref={svgRef} width={width} height={height}>
            </svg>
        </Modal>

    );
};

export default GraphModal;