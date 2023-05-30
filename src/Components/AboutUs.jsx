  /* eslint-disable jsx-a11y/anchor-is-valid */
  import React, { useEffect } from "react";
  import "./css/aboutus.css"
  function Services() {
    useEffect(() => {
      document.addEventListener("scroll", animateOnScroll);
      return () => {
        document.removeEventListener("scroll", animateOnScroll);
      };
    }, []);

    function animateOnScroll() {
      const teamItems = document.querySelectorAll(".team-item1, .team-item2, .team-item3, .team-item4, .anggota2, .kata_kata");
      teamItems.forEach((teamItem) => {
        const elementPosition = teamItem.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (elementPosition < screenHeight) {
          teamItem.classList.add("animate");
        } else {
          teamItem.classList.remove("animate");
        }
      });
    }

    return (
      <section class="section-white">
        <div className="bg_container">
          <div id="gabungan_container">
            <img id="gabungan_img" src="./image/gabungan_orang.jpg" />
          </div>
          <div className="overlay"></div>
        </div>
        <div class="col-md-12 text-center">
          <h2 class="section-title">OUR TEAM</h2>
        </div>
        <div class="container">
          <div className="pic_kata">
            <img
    className="anggota2"
    src="./image/anggota2.jpg"
    alt="pic"
    onMouseOver={(e) => (e.currentTarget.src = './image/anggota1.jpg')}
    onMouseOut={(e) => (e.currentTarget.src = './image/anggota2.jpg')}
  />
            <h4 class="kata_kata" style={{ fontFamily: "Montserrat" }}>Wesbite ini dibuat dengan empat orang yang berkumpul
              menjadi satu tim demi tercapainya proyek akhir mata kuliah Pengantar
              Teknologi Internet pada semester ke-2. Kami bersyukur dapat menyelesaikannya
              tepat waktu dengan berusaha semaksimal mungkin. Terlaksananya proyek ini tentu
              tak lepas dari kerjasama tim, pembagian tugas, dan saling membantu satu sama
              lainnya.</h4>
          </div>
          <div class="row">
            <div class="col-sm-6 col-md-4">
              <div class="team-item1">
                <img src="./image/Alfonsus.jpg" class="team-img" alt="pic" />
                <h3>Alfonsus Vega Hentya Tanojo</h3>
                <div class="team-info">
                  <p>NIM: 00000068825</p>
                </div>
                <p>
                  Saya berperan dalam memulai pembuatan halaman utama, membuat education
                  page, household page, serta menyambungkan semua halaman dengan react router dom
                </p>
              </div>
            </div>

            <div class="col-sm-6 col-md-4">
              <div class="team-item2">
                <img src="./image/Farren.jpg" class="team-img" alt="pic" />
                <h3>Farren Yazid Pasha</h3>
                <div class="team-info">
                  <p>NIM: 00000044665</p>
                </div>
                <p>
                  Setiap project kelompok yang dilaksanakan, pasti terlibat anggota kelompok di dalamnya.
                  Oleh karena itu saya berperan dalam membuat About Us page, memulai login page,
                  dan membuat poster untuk pameran.
                </p>
              </div>
            </div>
            <div class="col-sm-6 col-md-4">
              <div class="team-item3">
                <img src="./image/Friliyandre.jpg" class="team-img" alt="pic" />
                <h3>Friliyandre</h3>
                <div class="team-info">
                  <p>NIM: 00000068633</p>
                </div>
                <p>
                  Saya juga terlibat dalam memulai pengerjaan halaman utama hingga selesai,
                  memberi tampilan tambahan pada About Us page, sebagian besar javascript, dan
                  CSS.
                </p>
              </div>
            </div>
            <div class="col-sm-6 col-md-4">
              <div class="team-item4">
                <img src="./image/Michael.jpg" class="team-img" alt="pic" />
                <h3>Michael Aditya</h3>
                <div class="team-info">
                  <p>NIM: 00000068806</p>
                </div>
                <p>
                  Terdapat beberapa API yang telah saya hubungkan kepada website saya, membuat
                  daftar-daftar kartu para pekerja jasa, serta membuat tampilan portofolio mereka.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  export default Services;
