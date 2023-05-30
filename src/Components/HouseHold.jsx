import React from "react";
import { Link } from "react-router-dom"
import "./css/education.css";

export default function HouseHold() {
  return (
    <div>
      <div className="info">
        <br />
        <h1>Household</h1>
        <p>We provide a HouseHold Services</p>

        
        <div className="container-edu">
          <Link className="box" id="mat" to='/housekeep'>
     
            <img className="bersih" src="./image/tukang_bersih.png"
              style={{ width: "200px", height: "200px" }} />
            <button>House Keeper</button>

          </Link>

          <Link className="box" id="eng" to='/mobil'>
            <img src="./image/carwash.png"
              style={{ width: "200px", height: "200px", marginTop: "50px" }} />
            <button>Car Service</button>
          </Link>
          
          <Link className="box" id="science" to='/air'>
            <img src="./image/ac_cleaner.png"
              style={{ width: "200px", height: "200px", marginTop: "50px" }} />
            <button>AC Care</button>
          </Link>

            <Link className="box" id="toilet" to='/toilet'>
            <img src="./image/toilet_service.png"
              style={{ width: "200px", height: "200px", marginTop: "50px" }} />
            <button>Bathroom/Toilet Service</button>
            </Link>
          
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}