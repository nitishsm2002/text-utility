import React,{useState} from "react";

export default function TextForm(props) {
    const handleUpClick=()=>{
       
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLowClick=()=>{
        
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleResetClick=()=>{
         window.location.reload(false);
    }
    const HandleOnChange=(event)=>{
        
        setText(event.target.value);
    }
    const [text,setText]=useState('');
    
  return (
    <>
    <div className="container">

    </div>
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
        </label>
        <textarea
          className="form-control"
          value={text}onChange={HandleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2"onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-secondary mx-2"onClick={handleLowClick}>Convert to LowerCase</button>
      <button className="btn btn-danger mx-2"onClick={handleResetClick}>reset</button>

    </div>
    <div className="container my-4">
        <h2>Your text summary </h2>
        <p>{text.split(" ").length} words and {text.length} charaters</p>
        <p>{0.008*text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>

    </div>
    </>
  );
}
