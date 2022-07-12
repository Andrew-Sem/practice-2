import React, {FC, useEffect, useState} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import Loader from "../UI/Loader/Loader";
import StudentCard from "../StudentCard/StudentCard";
import cl from "./StudentsList.module.css"
import {StudentState} from "../../types/student";

interface StudentListProps extends StudentState {
    studentModal: boolean,
    setStudentModal: (arg0: boolean) => void,
    setCurrentStudentId: (arg0: any) => void
}

const StudentsList: FC<StudentListProps> = (props) => {
    const {error, loading, students, setStudentModal, setCurrentStudentId} = props
    const {fetchStudents} = useActions()

    useEffect(() => {
        fetchStudents()
    }, [])
    if (loading)
        return <Loader/>
    if (error)
        return <h1>{error}</h1>

    return (
        <div className={"container"}>
            <div className={cl.list}>
                {students.map(student =>
                    <StudentCard
                        key={student.id}
                        student={student}
                        index={students.indexOf(student)}
                        setVisible={setStudentModal}
                            setCurrentStudentId={setCurrentStudentId}
                    />
                )}
            </div>
        </div>
    );
};

export default StudentsList;