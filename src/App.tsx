import React from 'react';
import './App.css';
import StudentsForm from "./components/StudentsForm/StudentsForm";
import StudentsListHat from "./components/StudentsListHat/StudentsListHat";

const App = () => {
  return (
    <div className={"app"}>
        <StudentsListHat/>
        <div className={"container"}>
            <StudentsForm/>
        </div>
    </div>
  );
}

export default App;
