import React from "react";
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Homepage from "./HOMPAGE/Homepage";
import Makeupwithluna from "./HOMPAGE/Makeupwithluna";
import Createstory from "./HOMPAGE/Createstory";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route path="/Makeupwithluna" element={<Makeupwithluna/>}/>
        <Route path="/Createstory" element={<Createstory/>}/>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
