// import logo from "./logo.svg";
// import "./App.css";
// let name = "Sreejit";
import React, { useState } from "react";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [Colour, setColour] = useState("white");
  const [alert, setAlert] = useState(null);
  // const [colour, setColour] = useState("white")
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type, //l
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = (message, type) => {
    if (mode === "dark") {
      setMode("light");

      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode enabled", "success");
    }
  };
  const colourBody = (mode, colour) => {
    if (colour === "blue") {
      if (mode === "light") {
        document.body.style.backgroundColor = "#ccddff";
        document.body.style.color = "black";
      }
      if (mode === "dark") {
        document.body.style.backgroundColor = "#003cb3";
        document.body.style.color = "white";
      }
    }
    if (colour === "red") {
      if (mode === "light") {
        document.body.style.backgroundColor = "#ff9980";
        document.body.style.color = "black";
      }
      if (mode === "dark") {
        document.body.style.backgroundColor = "#cc2900";
        document.body.style.color = "white";
      }
    }
    if (colour === "green") {
      if (mode === "light") {
        document.body.style.backgroundColor = "#80ff80";
        document.body.style.color = "black";
      }
      if (mode === "dark") {
        document.body.style.backgroundColor = "#00b300";
        document.body.style.color = "white";
      }
    }
  };
  return (
    <>
      {/* <Navbar  title = "TextUtils" mode = {mode}  toggleMode = {toggleMode}/> */}
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} colourBody={colourBody}/>
      <Alert alert={alert} />
      <div className="container">

        {/* <Routes>
          <Route path="/about" element = { <About />}>
           
          </Route>

          <Route path="/" element={ */}
          <TextForm
              heading="Enter Your Text"
              mode={mode}
              showAlert={showAlert}
              success="success"
            />
            {/* }> */}
            
          {/* </Route>
        </Routes> */}
        {/* <TextForm heading="Enter Your Text" mode={mode} showAlert={showAlert} success="success"/> */}
        
      </div>
      {/* </Router> */}
      {/* <About /> */}
    </>
  );
}

export default App;
