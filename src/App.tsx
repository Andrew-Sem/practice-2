import React from 'react';
import './App.css';
import StudentsForm from "./components/StudentsForm/StudentsForm";
import StudentsListHat from "./components/StudentsListHat/StudentsListHat";
import BottomControlPanel from "./components/BottomControlPanel/BottomControlPanel";

const App = () => {
  return (
    <div className={"app"}>
        <StudentsListHat/>
            <StudentsForm/>
        <BottomControlPanel/>
    </div>
  );
}

export default App;
