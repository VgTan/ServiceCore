import React from "react";
import "./css/footer.css";

export default function Footer() {
  document.addEventListener("scroll", function () {
    var text_contact = document.getElementById("text_contact");
    var containerOffsetTop = document.querySelector(".contact_square").offsetTop;
    var scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition > containerOffsetTop) {
      text_contact.classList.add("animate");
    } else {
      text_contact.classList.remove("animate");
    }
  });
  return (
    <div className="contact_square">
      <div id="text_contact">
        <h3>Universitas Multimedia Nusantara</h3>
        <p>
          Jalan Scientia Boulevard Gading, Curug Sangereng, Serpong, Kabupaten
          Tangerang, Banten 15810
          <br />
          <br /> Tel.: (021) 54220808
        </p>
        <br />
        <br />
      </div>
      <div className="logos">
        <img className="logo_footer" src="./image/logo_web.jpg"/>
        <img className="logo_wemen" src="./image/logo_umn.png" />
      </div>
      <div className="text2">
        <p>Copyright © 2022 | All rights reserved.</p>
      </div>
    </div>
  );
}
