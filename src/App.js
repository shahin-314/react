// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About1 from './components/About';
import Navbar1 from './components/Navbar';
import Tform2 from './components/Tform';
import Alert1 from './components/Alert';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';



import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {

  const[mode,setDm]=useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert=(message, type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null);
      },2000);
  }
  

 const Mode=()=>{
      if(mode==='light'){
        setDm('dark');
        document.body.style.backgroundColor='#243249';
        showAlert(" dark mode has been enabled","success");
        document.title="TextUtils-dark mode"
      }
      else{
        setDm('light');
        document.body.style.backgroundColor='white';
        showAlert(" light mode has been enabled","success");
        document.title="TextUtils-light mode"
      }
  }

  return (
    
<>
<Router>
  <Navbar1 title="TextUtiles" mode={mode} Mode={Mode}/>
  <Alert1 alert={alert}/>
  <div className="container my-3">
 
      <Routes>
  
      {/* <Route exact path="/Tform2" component={T} /> */}
      <Route exact path="/about" element={<About1 mode={mode} />}/>
      <Route exact path="/" element={<Tform2 heading="Enter Text" showAlert={showAlert} mode={mode}/>} />
    
  
      </Routes>
  

    {/* <Tform2 heading="Enter Text" showAlert={showAlert} mode={mode}/> */}
    {/* <About1/> */}

    </div>
    </Router>
    
   
</>

);

}
export default App;
