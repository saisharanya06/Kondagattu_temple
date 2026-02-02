import React from "react";
import "./Footer.css";
import { useLanguage } from "../../context/LanguageContext";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  const { lang } = useLanguage();

  return (
    <footer className="footer-section">
      <div className="footer-container">

        {/* Top Grid */}
        <div className="footer-grid">

          {/* Logo & About */}
          <div className="footer-about">
            <div className="footer-logo-row">
              <div className="footer-logo">ॐ</div>
              <div>
                <h3>
                  {lang === "te" ? "కొండగట్టు ఆలయం" : "Kondagattu Temple"}
                </h3>
                <p>
                  {lang === "te" ? "ఆంజనేయ స్వామి" : "Anjaneya Swamy"}
                </p>
              </div>
            </div>

            <p className="footer-desc">
              {lang === "te"
                ? "స్వయంభూ ఆంజనేయ స్వామి వెలిసిన పవిత్ర క్షేత్రం"
                : "Sacred shrine of Swayambhu Lord Hanuman"}
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>{lang === "te" ? "త్వరిత లింకులు" : "Quick Links"}</h4>
            <ul>
              <li><a href="#about">{lang === "te" ? "ఆలయ పరిచయం" : "About / History"}</a></li>
              <li><a href="#timings">{lang === "te" ? "దర్శనం సమయాలు" : "Darshan Timings"}</a></li>
              <li><a href="#reach">{lang === "te" ? "ఎలా చేరుకోవాలి" : "How to Reach"}</a></li>
              <li><a href="#gallery">{lang === "te" ? "గ్యాలరీ" : "Gallery"}</a></li>
              <li><a href="#contact">{lang === "te" ? "సంప్రదింపు" : "Contact"}</a></li>
            </ul>
          </div>

          {/* Visiting Hours */}
          <div className="footer-timings">
            <h4>{lang === "te" ? "దర్శన సమయాలు" : "Visiting Hours"}</h4>
            <p>
              {lang === "te" ? "ఉదయం" : "Morning"}: 6:00 AM – 12:00 PM
            </p>
            <p>
              {lang === "te" ? "సాయంత్రం" : "Evening"}: 4:00 PM – 8:00 PM
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>
            {lang === "te"
              ? "© అన్ని హక్కులు పరిరక్షించబడ్డాయి – కొండగట్టు ఆలయం"
              : "© All rights reserved – Kondagattu Temple"}
          </p>

          <p className="footer-love">
            Made with <FaHeart /> for devotees
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
