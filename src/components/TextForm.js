import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Your Text");
  // setText("sdksjdsln");
  const handleUpClick = () => {
    console.log("Upper Case Clicked  + " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Lower to Upper","success")
  };
  const handleOnChange = (event) => {
    console.log("Changing");
    setText(event.target.value);
  };
  const removeExtra = (event) => {
    console.log("Removed extra spaces");
    let newT = text.replace(/\s+/g, " ").trim();
    setText(newT);
    props.showAlert("Text Cleared","success")
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied","success")
  };
  
  
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={
              {
                backgroundColor: props.mode === "light" ? "white" : "grey",
                color: props.mode === "dark" ? "white" : "#042743",
                // colourBody("")
              }
              // {color:props.mode==='dark' ? 'black':'white',}
            }
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={removeExtra}>
          Remove Extra
        </button>
        <button className="btn btn-primary" onClick={handleCopy}>
          Copy
        </button>
      </div>
      <div className="container my-3 " style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
