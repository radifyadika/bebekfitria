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
          Bebek Fitria telah berdiri selama lebih dari 3 tahun, hadir untuk
          menjawab kebutuhan akan telur bebek yang terus meningkat. Meskipun
          permintaan tinggi, produksi telur bebek sering kali mengalami
          fluktuasi karena bergantung pada metode tradisional seperti angon.
        </p>
        <p>
          Saat ini, kami mengelola lebih dari 500 ekor bebek di Desa Waluya,
          Kecamatan Kutawaluya, Kabupaten Karawang. Usaha ini didukung oleh
          dedikasi dan kerja keras lebih dari 10 karyawan yang bersama-sama
          tumbuh dan berkembang bersama Bebek Fitria. Bisnis kami berfokus pada
          pemrosesan telur bebek dengan metode peternakan unggulan yang ramah
          lingkungan dan berkualitas tinggi. Kami berkomitmen untuk memberikan
          produk terbaik kepada pelanggan, sekaligus mendukung perekonomian desa
          dan menjaga kelestarian lingkungan.
        </p>
      </div>
    </div>
  );
};

export default About;
