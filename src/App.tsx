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
import PieChartModal from "./components/PieChartModal/PieChartModal";


const App = () => {
    const {error, loading, students} = useTypedSelector(state => state.student)
    const [filter, setFilter] = useState({sort: "", query: ""});
    const sortedAndSearchedStudents = useStudents(students, filter.sort, filter.query);
    const [studentAddModal, setStudentAddModal] = useState(false)
    const [studentModal, setStudentModal] = useState(false)
    const [histogramModal, setHistogramModal] = useState(false)
    const [pieChartModal, setPieChartModal] = useState(false)
    const [currentStudentId, setCurrentStudentId] = useState("")
    const modals: modals = {
        studentModal: {visible: studentModal, setVisible: setStudentModal},
        studentAddModal: {visible: studentAddModal, setVisible: setStudentAddModal},
        histogramModal: {visible: histogramModal, setVisible: setHistogramModal},
        pieChartModal: {visible: pieChartModal, setVisible: setPieChartModal},
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
            <HistogramModal visible={histogramModal} setVisible={setHistogramModal} data={sortedAndSearchedStudents}/>
            <PieChartModal visible={pieChartModal} setVisible={setPieChartModal} data={sortedAndSearchedStudents}/>
        </div>
    );
}

export default App;
