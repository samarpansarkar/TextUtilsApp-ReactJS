import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from 'react'

function App() {
  const [mode, setmode] = useState("dark");

  const toggleMode = ()=>{
    if(mode === 'dark'){
      setmode('light');
    }else{
      setmode('dark');
    }
  }
  return (
    <>
      <Navbar mode = {mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter text below" />
        {/* <About my-1 /> */}
      </div>
    </>
  );
}

export default App;
