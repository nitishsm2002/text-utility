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
    const HandleOnChange=(event)=>{
        
        setText(event.target.value);
    }
    const [text,setText]=useState('enter text here');
    
  return (
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
      <button className="btn btn-primary mx-5"onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-secondary mx-2"onClick={handleLowClick}>Convert to LowerCase</button>
    
    </div>
  );
}
