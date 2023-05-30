import React, { useEffect } from "react";
import "./css/main.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
export default function Main() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      document.addEventListener("scroll", function () {
        var containerElement = document.getElementById("container");
        var nampungElement = document.getElementById("nampung");
        var nampung2Element = document.getElementById("nampung2");
        var scrollPosition = window.scrollY + window.innerHeight;

        if (containerElement) {
          var VisiMisiElement = document.getElementById("visi_misi");
          var AnimatedIMG = document.getElementById("animated-img");
          var containerElement = document.getElementById("container");
          VisiMisiElement?.classList.toggle("animate", scrollPosition > containerElement.offsetTop);
          AnimatedIMG?.classList.toggle("animate", scrollPosition > containerElement.offsetTop);
          containerElement?.classList.toggle("animate", scrollPosition > containerElement.offsetTop);
        }
        if (nampungElement) {
          var gambarGambarElement = document.getElementById("gambar_gambar");
          var h2JargonElement = document.getElementById("h2_jargon");
          var pJargonElement = document.getElementById("p_jargon");
          gambarGambarElement?.classList.toggle("animate", scrollPosition > nampungElement.offsetTop);
          h2JargonElement?.classList.toggle("animate", scrollPosition > nampungElement.offsetTop);
          pJargonElement?.classList.toggle("animate", scrollPosition > nampungElement.offsetTop);
        }
        if (nampung2Element) {
          var gambarGambar2Element = document.getElementById("gambar_gambar2");
          var h2Jargon2Element = document.getElementById("h2_jargon2");
          var pJargon2Element = document.getElementById("p_jargon2");
          gambarGambar2Element?.classList.toggle("animate", scrollPosition > nampung2Element.offsetTop);
          h2Jargon2Element?.classList.toggle("animate", scrollPosition > nampung2Element.offsetTop);
          pJargon2Element?.classList.toggle("animate", scrollPosition > nampung2Element.offsetTop);
        }

        animateOnScroll("kotak1");
        animateOnScrollWithSquare("kotak1");
        animateOnScrollWithSquare("kotak2");
        animateOnScrollWithSquare("kotak4");
        addMouseoverMouseout("kotak1");
        addMouseoverMouseout("kotak2");
        addMouseoverMouseout("kotak4");
        animateOnScroll2("kotak2");
        animateOnScroll4("kotak4");
        animateOnScrollWithSquare("kotak2");
        animateOnScrollWithSquare("kotak3");
        addMouseoverMouseout("kotak2");
        addMouseoverMouseout("kotak3");
        animateOnScroll3("kotak3");
        animateOnScrollWithSquare("kotak3");
        addMouseoverMouseout("kotak3");
      });

      function animateOnScroll(elementId) {
        var element = document.getElementById(elementId);
        if (element) {
          var elementPosition = element.getBoundingClientRect().top;
          var screenHeight = window.innerHeight;

          if (elementPosition < screenHeight) {
            element.classList.add("animate");
          }
        }
      }

      function animateOnScrollWithSquare(elementId) {
        var element = document.getElementById(elementId);
        var squareElement = document.getElementById("square");
        var squareOffsetTop = squareElement ? squareElement.offsetTop : 0;
        var scrollPosition = window.scrollY + window.innerHeight;

        if (element) {
          element.classList.toggle("animate", scrollPosition > squareOffsetTop);
        }
      }


      function addMouseoverMouseout(elementId) {
        var element = document.getElementById(elementId);
        if (element) {
          element.addEventListener("mouseover", function () {
            element.style.transform = "translateY(-15%)";
            element.style.backgroundColor = "lightskyblue";
            element.style.opacity = 1;
          });
          element.addEventListener("mouseout", function () {
            element.style.transform = "translateY(0)";
            element.style.backgroundColor = "lightskyblue";
            element.style.opacity = 0.4;
          });
        }
      }

      function animateOnScroll2(elementId) {
        var element = document.getElementById(elementId);
        if (element) {
          element.addEventListener("mouseover", function () {
            element.classList.add("animate");
          });
          element.addEventListener("mouseout", function () {
            element.classList.remove("animate");
          });
        }
      }

      function animateOnScroll3(elementId) {
        var element = document.getElementById(elementId);
        if (element) {
          var elementPosition = element.getBoundingClientRect().top;
          var screenHeight = window.innerHeight;

          if (elementPosition < screenHeight) {
            element.style.backgroundColor = "lightskyblue";
            element.style.opacity = 1;
          }
        }
      }

      function animateOnScroll4(elementId) {
        var element = document.getElementById(elementId);
        var squareElement = document.getElementById("square");
        var squareOffsetTop = squareElement ? squareElement.offsetTop : 0;
        var scrollPosition = window.scrollY + window.innerHeight;

        if (element) {
          element.classList.toggle("animate", scrollPosition > squareOffsetTop);
        }
      }
    }
  }, [location.pathname]);
  return (
    <div id="root">
      <Carousel className="caraosel" fade interval={3000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./image/home_study.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h4>fulfill your daily service needs</h4>
            <p>MEMBANTU EDUKASI ANAK</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./image/domestic_wroker.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h4>fulfill your daily service needs</h4>
            <p>PELAYANAN JASA YANG TERPERCAYA</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./image/hepi_femili.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h4>fulfill your daily service needs</h4>
            <p>
              MENINGKATKAN EDUKASI VIA DARING
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br />

      <div className="pilihan">
        <div className="button_edu">
          <li>
            <Link to="/education">
              <lord-icon
                className="edukasi"
                src="https://cdn.lordicon.com/ttioogfl.json"
                trigger="morph"
                colors="primary:#121331,secondary:#ebe6ef,tertiary:#1663c7,quaternary:#92140c,quinary:#e4e4e4"
                style={{ width: "250px", height: "250px" }}
              ></lord-icon>
            </Link>
          </li>
          <li>
            <button>Education</button>
          </li>
        </div>
        <div className="button_house">
          <li>
            <Link to="/household">
              <lord-icon
                className="edukasi"
                src="https://cdn.lordicon.com/cqmhvubj.json"
                trigger="hover"
                colors="outline:#121331,primary:#92140c,tertiary:#b26836,quaternary:#4bb3fd,quinary:#ebe6ef"
                style={{ width: "250px", height: "250px" }}
              ></lord-icon>
            </Link>
          </li>
          <li>
            <button>Household</button>
          </li>
        </div>
      </div>

      <br />
      <br />
      <div id="container">
        <img id="animated-img" src="./image/happyworker.jpg" alt="" />
        <div id="visi_misi">
          <p style={{ fontFamily: "Roboto Slab, serif" }}>
            Website yang membantu memenuhi kebutuhan masyarakat Jakarta
            sebagai jawaban atas sibuknya masyarakat dalam pekerjaannya,
            sehingga mereka tidak punya waktu untuk melakukan pekerjaan rumah
            tangga serta membantu mengajar anak dalam pendidikannya.
          </p>
          <p style={{ fontFamily: "Roboto Slab, serif" }}>
            Dengan visi dan misi yang kami miliki, kami percaya dapat
            meningkatkan efisiensi masyarakat, membangun ekonomi masyarakat,
            disertai menjaga mutu para teknisi dan tenaga ajar demi kenyamanan
            dan keamanan customer.
          </p>
        </div>
      </div>
      <div className="container">
        <div id="nampung">
          <img id="gambar_gambar" src="./image/homeschool.jpg" alt="" />
          <h2 id="h2_jargon">Memberikan Pelayanan Terbaik</h2>
          <p id="p_jargon">
            Kami menjamin keamanan, kenyamanan, dan kepuasan customer. Baik itu
            keamanan teknisi atau pekerja, keamanan guru, kenyamanan kedua pihak
            antara customer, teknisi, dan guru, serta kepuasan customer terhadap
            hal yang dikerjakan, juga terhadap hasil baik dari anak di rumah.
          </p>
        </div>
        <div id="nampung2">
          <h2 id="h2_jargon2">
            Mudah, Murah, dan Efisien
            <img id="gambar_gambar2" src="./image/hp_senang.jpg" alt="" />
            <p id="p_jargon2">
              Jasa kami dapat disewa dengan mudah, yaitu hanya dengan
              menggunakan hp Anda di rumah. Anda dapat menyelesaikan pekerjaan
              rumah yang merepotkan dengan harga terjangkau. Selain hemat
              tenaga, Anda juga menghemat waktu dimana Anda bisa melakukan
              pekerjaan lain, serta tersedia juga layanan online.
            </p>
          </h2>
        </div>
        <div id="square">
          <div id="kotak1" className="animate">
            <img src="./image/topi_wisuda.png" alt="" />
            <p
              style={{
                fontFamily: "Montserrat",
                textAlign: "center",
                marginTop: "-30px",
              }}
            >
              Tenaga Ahli di Bidangnya
            </p>
          </div>
          <div id="kotak2">
            <img src="./image/logo_wifi.png" alt="" />
            <p
              style={{
                fontFamily: "Montserrat",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              Tersedia Layanan Online
            </p>
          </div>
          <div id="kotak3">
            <img src="./image/rumah_vektor.png" alt="" />
            <p style={{ fontFamily: "Montserrat", textAlign: "center" }}>
              Tenaga Ahli di Bidangnya
            </p>
          </div>
          <div id="kotak4">
            <img src="./image/sabar.png" alt="" />
            <p
              style={{
                fontFamily: "Montserrat",
                marginTop: "-1px",
                textAlign: "center",
              }}
            >
              Tenaga Ahli di Bidangnya
            </p>
          </div>
        </div>
        <div className="tutor">
          <div id="howtuuse">
            <div className="content">
              <p
                style={{ fontFamily: "Roboto Slab, serif", textAlign: "left" }}
              >
                Website ini menawarkan 2 pilihan yaitu pelayanan pekerjaan rumah
                tangga dan pelayanan edukasi anak di rumah.
              </p>
              <p style={{ fontFamily: "Roboto Slab, serif" }}>
                Ketika Anda telah memilih, akan ada berbagai teknisi dan tenaga
                ajar yang sudah ahli dibidangnya, aman, dan dapat dipercaya.
                Anda dapat melihat penilaian terhadap mereka dari user yang
                telah menggunakan jasanya dan dapat memilih sesuai kriteria yang
                Anda butuhkan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}