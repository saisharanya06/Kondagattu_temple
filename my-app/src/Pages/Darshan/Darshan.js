import React from "react";
import "./Darshan.css";
import { useLanguage } from "../../context/LanguageContext";
import { FaClock, FaBell } from "react-icons/fa";

const Darshan = () => {
  const { lang } = useLanguage();

  return (
    <section className="darshan-section">
      <div className="darshan-container">

        {/* Header */}
        <div className="darshan-header">
          <FaClock className="darshan-icon" />
          <h2>
            {lang === "te"
              ? "దర్శనం & టైమింగ్స్"
              : "Darshan & Timings"}
          </h2>
          <p className="darshan-subtitle">
            {lang === "te"
              ? "శ్రీ కొండగట్టు ఆంజనేయ స్వామి ఆలయం"
              : "Sri Kondagattu Anjaneya Swamy Temple"}
          </p>
        </div>

        {/* Timings Box */}
        <div className="darshan-timings">

          <div className="timing-row">
            <span>
              {lang === "te" ? "ఉదయం " : "Morning"}
            </span>
            <strong>6:00 AM – 12:00 PM</strong>
          </div>

          <div className="timing-row">
            <span>
              {lang === "te" ? "సాయంత్రం " : "Evening"}
            </span>
            <strong>4:00 PM – 8:00 PM</strong>
          </div>

        </div>

        {/* Note */}
        <div className="darshan-note">
          <FaBell />
          <span>
            {lang === "te"
              ? "పండుగ రోజుల్లో దర్శన సమయాలు పొడిగించబడవచ్చు (లైవ్ అప్‌డేట్స్ అందుబాటులో ఉంటాయి)."
              : "Festival days may have extended darshan timings (Live updates enabled)."}
          </span>
        </div>

      </div>
    </section>
  );
};

export default Darshan;
