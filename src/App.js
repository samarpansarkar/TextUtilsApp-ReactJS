import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState, useSyncExternalStore } from 'react'

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert("Dark mode has been enabled", "success");
    }else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      <Navbar mode = {mode} toggleMode={toggleMode} />

      <Alert alert = {alert}/>

      <div className="container my-3">
        <TextForm heading="Enter text below" mode = {mode} showAlert= {showAlert} />
        {/* <About my-1 /> */}
      </div>
    </>
  );
}

export default App;
