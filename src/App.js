import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from 'react'

function App() {
  const [mode, setmode] = useState("light");

  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#343a40';
    }else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar mode = {mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter text below" mode = {mode} />
        {/* <About my-1 /> */}
      </div>
    </>
  );
}

export default App;
