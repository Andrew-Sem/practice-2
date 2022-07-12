import React, {useState} from 'react';
import './App.css';
import StudentsListHat from "./components/StudentsListHat/StudentsListHat";
import BottomControlPanel from "./components/BottomControlPanel/BottomControlPanel";
import StudentAddModal from "./components/StudentAddModal/StudentAddModal";
import StudentsList from "./components/StudentsList/StudentsList";
import {modals} from "./types/modal";
import HistogramModal from "./components/HistogramModal/HistogramModal";
import {useStudents} from "./hooks/useStudents";
import {useTypedSelector} from "./hooks/useTypedSelector";
import StudentModal from "./components/StudentModal/StudentModal";


const App = () => {
    const {error, loading, students} = useTypedSelector(state => state.student)
    const [filter, setFilter] = useState({sort: "", query: ""});
    const sortedAndSearchedStudents = useStudents(students, filter.sort, filter.query);
    const [studentAddModal, setStudentAddModal] = useState(false)
    const [studentModal, setStudentModal] = useState(false)
    const [graphModal, setGraphModal] = useState(false)
    const [currentStudentId, setCurrentStudentId] = useState("")
    const modals: modals = {
        studentModal: {visible: studentModal, setVisible: setStudentModal},
        studentAddModal: {visible: studentAddModal, setVisible: setStudentAddModal},
        graphModal: {visible: graphModal, setVisible: setGraphModal},
    }

    return (
        <div className={"app"}>
            <StudentsListHat/>
            <StudentsList
                error={error}
                students={sortedAndSearchedStudents}
                loading={loading}
                setStudentModal={setStudentModal}
                studentModal={studentModal}
                setCurrentStudentId={setCurrentStudentId}
            />
            <BottomControlPanel modals={modals} filter={filter} setFilter={setFilter}/>
            <StudentModal visible={studentModal} setVisible={setStudentModal} id={currentStudentId}/>
            <StudentAddModal visible={studentAddModal} setVisible={setStudentAddModal}/>
            <HistogramModal visible={graphModal} setVisible={setGraphModal}/>
        </div>
    );
}

export default App;
