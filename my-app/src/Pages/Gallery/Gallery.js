import React from "react";
import "./Gallery.css";
import { useLanguage } from "../../context/LanguageContext";
import {
  FaImages,
  FaMountain,
  FaPrayingHands,
  FaVideo
} from "react-icons/fa";

// ✅ Import your 3 images
import gopuramImg from "../../assets/kondagattu.jpg";
import hilltopImg from "../../assets/hanuman2.png";
import festivalImg from "../../assets/0061.jpg";

const Gallery = () => {
  const { lang } = useLanguage();

  // 🔴 Virtual Darshan (UNCHANGED)
  const virtualDarshanLink =
    "https://www.youtube.com/live/pg20oo_MjQM?si=xY0WBzucIjLgPqgZ";

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">

        {/* Header */}
        <div className="gallery-header">
          <FaImages className="gallery-icon" />
          <h2>{lang === "te" ? "గ్యాలరీ" : "Photo / Video Gallery"}</h2>
          <p>
            {lang === "te"
              ? "కొండగట్టు ఆలయానికి సంబంధించిన దృశ్యాలు"
              : "Moments and views from Kondagattu Temple"}
          </p>
        </div>

        {/* Grid */}
        <div className="gallery-grid">

          {/* Temple Gopuram */}
          <div
            className="gallery-card image-card"
            style={{ backgroundImage: `url(${gopuramImg})` }}
          >
            <div className="gallery-overlay">
              <FaPrayingHands />
              <h3>{lang === "te" ? "ఆలయ గోపురం" : "Temple Gopuram"}</h3>
            </div>
          </div>

          {/* Hilltop Views */}
          <div
            className="gallery-card image-card"
            style={{ backgroundImage: `url(${hilltopImg})` }}
          >
            <div className="gallery-overlay">
              <FaMountain />
              <h3>{lang === "te" ? "కొండపై దృశ్యాలు" : "Hilltop Views"}</h3>
            </div>
          </div>

          {/* Festival Moments */}
          <div
            className="gallery-card image-card"
            style={{ backgroundImage: `url(${festivalImg})` }}
          >
            <div className="gallery-overlay">
              <FaImages />
              <h3>{lang === "te" ? "ఉత్సవాలు" : "Festival Moments"}</h3>
            </div>
          </div>

          {/* ✅ Virtual Darshan – DO NOT TOUCH */}
          <a
            href={virtualDarshanLink}
            target="_blank"
            rel="noopener noreferrer"
            className="gallery-card video"
          >
            <FaVideo />
            <h3>
              {lang === "te" ? "వర్చువల్ దర్శనం" : "Virtual Darshan"}
            </h3>
            <span>YouTube</span>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Gallery;
