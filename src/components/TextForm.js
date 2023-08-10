import React, { useState } from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=> {
    console.log("Uppercase button was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = ()=>{
    console.log("Lowercase button was cliked" + text);
    let newText2 = text.toLowerCase();
    setText(newText2)
  }
  const handleClearClick = () =>{
    console.log("Clear button was clicked");
    setText('')
  }
  const handleCopyClick = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  
  const handleOnChange = (event) =>{
    setText(event.target.value)
  }

  const [text, setText] = useState('');

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'dark'}}>
      <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="from-control" value={text} style={{backgroundColor:props.mode==='dark'?'#343a40':'white',color:props.mode==='dark'?'white':'dark'}} onChange={handleOnChange} id='myBox' rows = '10' cols='50'></textarea>
            
        </div>
        <button type="submit" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button type="submit" className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button type="submit" className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button type="submit" className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
    <div className='container' style={{color:props.mode==='light'?'dark':'light'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters. </p>
      <p>{0.008 * text.split(" ").length} Minutes read!</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </div>
    </>
  )
}

