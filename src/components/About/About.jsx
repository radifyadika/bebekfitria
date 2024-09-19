import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about_img" />
        <img
          src={play_icon}
          alt=""
          className="play_icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>Tentang Kami</h3>
        <h2>Bebek Unggul, Kualitas Terbaik</h2>
        <p>
          Bebek Fitria adalah salah satu usaha mikro, kecil, dan menengah (UMKM)
          terbesar di Kabupaten Karawang yang berfokus pada pembudidayaan telur
          bebek secara berkelanjutan di lingkungan pedesaan.
        </p>
        <p>
          Berdiri sejak lebih dari 3 tahun yang lalu, Bebek Fitria melihat
          kebutuhan telor bebek tinggi namun produktifitas telor bebek
          fluktuatif karena mengandalkan telor angon dan kini telah berkembang
          menjadi salah satu UMKM lokal yang memproduksi produk bebek dengan
          kualitas terbaik. Kami mengelola lebih dari 500 ekor bebek di Desa
          Waluya, Kecamata Kutawaluya, Kabupaten Karawang. Usaha ini didukung
          oleh dedikasi dan kerja keras lebih dari 10 karyawan yang bersama-sama
          bergabung dan berkembang dengan Bebek Fitria.
        </p>
        <p>
          Bisnis kami meliputi pemrosesan telur bebek dengan metode peternakan
          unggulan yang ramah lingkungan dan berkualitas tinggi. Komitmen kami
          adalah memberikan yang terbaik bagi pelanggan, sambil turut mendukung
          perekonomian desa dan menjaga kelestarian lingkungan sekitar.
        </p>
      </div>
    </div>
  );
};

export default About;
