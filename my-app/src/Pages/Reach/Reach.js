import React from "react";
import "./Reach.css";
import { useLanguage } from "../../context/LanguageContext";
import {
  FaMapMarkedAlt,
  FaBus,
  FaTrain,
  FaRoad,
} from "react-icons/fa";

const HowToReach = () => {
  const { lang } = useLanguage();

  return (
    <section className="reach-section" id="how-to-reach">
      <div className="reach-container">

        {/* Header */}
        <div className="reach-header">
          <FaMapMarkedAlt className="reach-icon" />
          <h2>
            {lang === "te" ? "ఎలా చేరుకోవాలి" : "How to Reach"}
          </h2>
          <p className="reach-subtitle">
            {lang === "te"
              ? "శ్రీ కొండగట్టు ఆంజనేయ స్వామి ఆలయం"
              : "Sri Kondagattu Anjaneya Swamy Temple"}
          </p>
        </div>

        {/* Map */}
        <div className="reach-map">
          <iframe
            title="Kondagattu Temple Map"
            src="https://www.google.com/maps?q=Kondagattu%20Anjaneya%20Swamy%20Temple&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Distance Info */}
        <div className="reach-distances">
          <div className="distance-item">
            <FaRoad />
            <span>
              {lang === "te"
                ? "జగిత్యాల నుండి ≈ 15 కి.మీ"
                : "From Jagtial ≈ 15 km"}
            </span>
          </div>

          <div className="distance-item">
            <FaRoad />
            <span>
              {lang === "te"
                ? "కరీంనగర్ నుండి ≈ 38 కి.మీ"
                : "From Karimnagar ≈ 38 km"}
            </span>
          </div>

          <div className="distance-item">
            <FaRoad />
            <span>
              {lang === "te"
                ? "హైదరాబాద్ నుండి ≈ 178 కి.మీ"
                : "From Hyderabad ≈ 178 km"}
            </span>
          </div>
        </div>

        {/* Transport Info */}
        <div className="reach-transport">
          <div className="transport-item">
            <FaBus />
            <span>
              {lang === "te"
                ? "TSRTC బస్సులు అందుబాటులో ఉన్నాయి"
                : "TSRTC buses available"}
            </span>
          </div>

          <div className="transport-item">
            <FaTrain />
            <span>
              {lang === "te"
                ? "సమీప రైల్వే స్టేషన్: జగిత్యాల"
                : "Nearest Railway Station: Jagtial"}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowToReach;
