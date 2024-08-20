import React, { useState } from 'react';
export default function Inputform(props) {
  const [text, setText] = useState("");

  const convertToUppercase = () => {
    props.altershow("Convert to Upercase", "alert-success");
    setText(text.toUpperCase());
  };
  const getTextLength = () => {
    return text.length;
  };
  const convertToLowercase = () => {
    setText(text.toLowerCase());
    props.altershow("Convert to lowercase", "alert-success");

  };
  const reverseText = () => {
    setText(text.split("").reverse().join(""));
    props.altershow("Convert to Reverce", "alert-warning");

  };

  const capitalizeFirstLetter = () => {
    setText(text.charAt(0).toUpperCase() + text.slice(1));
    props.altershow("Convert to capitalize", "alert-success");

  };


  const clearText = () => {
    setText("");
    props.altershow("clear text", "alert-danger");

  };
  const copyText = () => {
    var text = document.getElementById("exampleFormControlTextarea1");
  
    if (!text) {
      // Handle the case where the element with ID "exampleFormControlTextarea1" is not found
      console.error("Textarea element not found");
      return;
    }
  
    if (!navigator.clipboard) {
      // Handle the case where the Clipboard API is not supported
      console.error("Clipboard API not supported");
      return;
    }
  
    props.altershow("Copied text", "alert-dark");
  
    text.select();
    navigator.clipboard.writeText(text.value)
      .then(() => {
        console.log('Text copied successfully');
      })
      .catch((error) => {
        console.error('Error copying text: ', error);
      });
  };
  

  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const removespace = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.altershow("Remove Space", "alert-success");


  };
  return (
    <>
      <div className="mb-3 container my-3" style={props.apmod} >
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h4 className='m-3'>{props.heading}</h4>
        </label>
        <textarea
  className="form-control"
  id="exampleFormControlTextarea1"
  rows={5}
  value={text}
  onChange={handleOnChange}
  placeholder="Enter the Text...." 
  style={{
    background: props.modtxt === "Enable dark mod" ? "rgb(187, 187, 187)" : "white",
  }}
/>

        <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={convertToUppercase} style={{"width":"125px"}}>Uppercase</button>
        <button disabled={text.length===0}  className="btn btn-primary mx-3" onClick={convertToLowercase} style={{"width":"120px"}}>Lowercase</button>
        <button disabled={text.length===0}  className="btn btn-primary mx-3" onClick={reverseText} style={{"width":"120px"}}>Reverse</button>
        <button disabled={text.length===0}  className="btn btn-primary mx-3 " onClick={capitalizeFirstLetter} style={{"width":"125px"}}>Capitalize</button>
        <button disabled={text.length===0}  className="btn btn-primary mx-3 my-3" onClick={clearText} style={{"width":"125px"}}>Clear</button>
        <button disabled={text.length===0}  className="btn btn-primary mx-3 " onClick={copyText} style={{"width":"120px"}}>Copy</button>
        <button disabled={text.length===0}  className="btn btn-primary mx-3 " onClick={removespace} style={{"width":"129px"}}>Remove Space</button>


      </div>
      <div className="container">
        <h4>Text Sumaary</h4>
        <p>Number of character: {getTextLength()}</p>
        <p>Number of Words: {text.split(/\s+/).filter((element)=>{return element.length!==0;}).length}</p>
        <p>Time required to read it : {Math.round(0.008 * text.split(' ').filter((element)=>{return element.length!==0;}).length * 100000*60) / 100000} Sec</p>
      </div>
    </>
  );
}
