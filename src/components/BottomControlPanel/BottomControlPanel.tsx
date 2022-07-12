import React, {FC, useEffect, useState} from 'react';
import cl from "./BottomControlPanel.module.css"
import Input from "../UI/Input/Input";
import createRandomStudent from "../../utils/createRandomStudent";
import checkStudentTypes from "../../utils/checkStudentTypes";
import {useActions} from "../../hooks/useActions";
import Btn from "../UI/Btn/Btn";
import {modals} from "../../types/modal";
import StudentsFilter from "../StudentsFilter/StudentsFilter";

interface BottomControlPanelProps {
    modals:modals,
    filter:any,
    setFilter:any
}

const BottomControlPanel:FC<BottomControlPanelProps> = ({modals, filter, setFilter}) => {
    const [numOfRandomStudents, setNumOfRandomStudents] = useState(0)
    const {studentModal, graphModal} = modals
    const {createStudent} = useActions()
    const addALotOfNewRandomStudents = (num: number) => {
        if (num < 1) return {message: "num must be > 0", num: num}
        for (let i = 0; i < num; i++) {
            const student = createRandomStudent()
            const error = checkStudentTypes(student)
            if (error.message !== "") return console.error(error)
            createStudent(student)
        }
    }
    return (
        <div className={cl.panel_wrapper}>
            <div className={"container"}>
                <div className={cl.panel}>
                    <StudentsFilter filter={filter} setFilter={setFilter} />
                    <Input
                        placeholder={"Enter num of students"}
                        value={numOfRandomStudents}
                        label={"Num of students"}
                        onChange={(e) => setNumOfRandomStudents(e.target.value)}
                        type={"number"}
                    />
                    <Btn
                        onClick={() => addALotOfNewRandomStudents(numOfRandomStudents)}
                        type={"safe"}>
                        Add random students
                    </Btn>
                    <Btn onClick={() => studentModal.setVisible(!studentModal.visible)}>Add 1 student</Btn>
                    <Btn onClick={() => graphModal.setVisible(!graphModal.visible)}>Show graph</Btn>
                </div>
            </div>
        </div>
    );
};

export default BottomControlPanel;