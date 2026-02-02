import React from "react";
import "./About.css";
import { useLanguage } from "../../context/LanguageContext";
import aboutImage from "../../assets/hanuman.jpg";
import { FaScroll, FaOm } from "react-icons/fa";

const About = () => {
  const { lang } = useLanguage();

  return (
    <section className="about-section">
      <div className="about-container">

        {/* Image Side */}
        <div className="about-image">
          <img src={aboutImage} alt="Lord Hanuman - Kondagattu Temple" />
        </div>

        {/* Content Side */}
        <div className="about-content">
          <div className="about-header">
            <FaOm className="about-icon" />
            <h2>
              {lang === "te" ? "ఆలయ పరిచయం" : "About / History"}
            </h2>
            <span className="about-subtitle">
              {lang === "te"
                ? "కొండగట్టు ఆంజనేయ స్వామి ఆలయం"
                : "Kondagattu Anjaneya Swamy Temple"}
            </span>
          </div>

          <p className="about-text">
            {lang === "te" ? (
              <>
                కొండగట్టు ఆలయం శతాబ్దాల చరిత్ర కలిగిన ప్రసిద్ధ హనుమాన్ క్షేత్రం.
                స్థానిక పురాణాల ప్రకారం స్వయంభువుగా ఆంజనేయ స్వామి వెలిసిన పవిత్ర
                స్థలం ఇది. కాలక్రమేణా అనేక పునరుద్ధరణలు జరిగాయి.
              </>
            ) : (
              <>
                Kondagattu Temple is an ancient and revered shrine dedicated to
                Lord Hanuman. According to local legends, the deity manifested
                here as a <strong>Swayambhu</strong>. The temple has undergone
                several renovations over the centuries.
              </>
            )}
          </p>

          <div className="about-highlight">
            <FaScroll />
            <span>
              {lang === "te"
                ? "స్వయంభూ ఆంజనేయ స్వామి మహిమతో ప్రసిద్ధి"
                : "Renowned for the divine Swayambhu manifestation"}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
