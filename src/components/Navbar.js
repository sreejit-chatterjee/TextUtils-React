import React from "react";
import PropTypes from "prop-types";
// import { Link } from 'react-router-dom';
export default function Navbar(props) {
  // const [Assign, setAssign] = useState("blue")

  const colourize = (mode, colour,event) => {
    // props.colourBody(props.mode, colour);
    if (colour === "blue"){
      if (mode === "light"){
        document.body.style.backgroundColor = "#ccddff"
        document.body.style.color = "black"
      }
      if (mode === "dark"){
        document.body.style.backgroundColor = "#003cb3"
        document.body.style.color = "white"
      }
    }
    if (colour === "red")
    {
      if (mode === "light")
      {
        document.body.style.backgroundColor = "#ff9980"
        document.body.style.color = "black"
      }
      if (mode === "dark")
      {
        document.body.style.backgroundColor = "#cc2900"
        document.body.style.color = "white"
      }
    }    
      if (colour === "green"){
      if (mode === "light"){
        document.body.style.backgroundColor = "#80ff80"
        document.body.style.color = "black"
      }
      if (mode === "dark"){
        document.body.style.backgroundColor = "#00b300"
        document.body.style.color = "white"
      }    
    }
  };
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light"> */}
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li> */}
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success m-2" type="submit">
                Search
              </button>
            </form>
            <div>

            {/* <button
              className="btn btn-primary mx-2"
              type = "submit"
              onClick={colourize(props.mode, "blue")}
            ></button>

            <button
              className="btn btn-danger mx-2"
              type ="submit"
              onSubmit={colourize(props.mode, "red")}
              // type = "checkbox"
            ></button>

            <button
              className="btn btn-success mx-2"
              type ="submit"
              onClick={colourize(props.mode, "green")}
            ></button> */}
          
            </div>
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input mx-3"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable {props.mode === "light" ? "dark" : "light"} Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = { title: PropTypes.string.isRequired };
Navbar.defaultProps = { title: "Yo" };
