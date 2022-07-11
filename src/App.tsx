import React, {useState} from 'react';
import './App.css';
import StudentsListHat from "./components/StudentsListHat/StudentsListHat";
import BottomControlPanel from "./components/BottomControlPanel/BottomControlPanel";
import StudentAddModal from "./components/StudentModal/StudentAddModal";
import StudentsList from "./components/StudentsList/StudentsList";
import {modals} from "./types/modal";
import HistogramModal from "./components/HistogramModal/HistogramModal";


const App = () => {
    const [studentModal, setStudentModal] = useState(false)
    const [graphModal, setGraphModal] = useState(false)
    const modals:modals = {
        studentModal:{visible: studentModal, setVisible: setStudentModal},
        graphModal:{visible: graphModal, setVisible: setGraphModal},
    }

    return (
        <div className={"app"}>
            <StudentsListHat/>
            <StudentsList/>
            <BottomControlPanel modals={modals}/>
            <StudentAddModal visible={studentModal} setVisible={setStudentModal}/>
            <HistogramModal visible={graphModal} setVisible={setGraphModal}/>
        </div>
    );
}

export default App;
