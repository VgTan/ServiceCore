import React from "react";
import "./css/education.css";
import { Link } from 'react-router-dom'
export default function Education() {
  return (
    <div id="root">
      <div className="info">
        <br />
        <h1>Education</h1>
        <p>We provide education range from grades 1 to 6</p>
        <div className="container-edu">
          <Link className="box" id="mat" to='/mat'>
            <lord-icon
              src="https://cdn.lordicon.com/qtqvorle.json"
              trigger="hover"
              colors="outline:#121331,primary:#646e78,secondary:#ebe6ef,tertiary:#4cb4fd"
              style={{ width: "250px", height: "250px" }}
            ></lord-icon>
            <button>Mathematics</button>
          </Link>
          <Link className="box" id="bahasa" to='/indo'>
          <img src="./image/bindo.jpg"
              style={{ width: "250px", height: "250px" }} />
            <button>Bahasa Indonesia</button>
          </Link>
          <Link className="box" id="eng" to='/eng'>
            <lord-icon
              src="https://cdn.lordicon.com/kjkiqtxg.json"
              trigger="hover"
              colors="outline:#121331,primary:#646e78,secondary:#4bb3fd,tertiary:#ebe6ef"
              style={{ width: "250px", height: "250px" }}
            ></lord-icon>
            <button>English</button>
          </Link>
          <Link className="box" id="science" to='/sci'>
            <lord-icon
              src="https://cdn.lordicon.com/ifuevrlc.json"
              trigger="hover"
              colors="outline:#121331,primary:#1663c7,secondary:#242424,tertiary:#ebe6ef"
              style={{ width: "250px", height: "250px" }}
            ></lord-icon>
            <button>Science</button>
          </Link>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
