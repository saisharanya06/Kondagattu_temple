import React from "react";
import "./Accommodation.css";
import { useLanguage } from "../../context/LanguageContext";
import {
  FaBed,
  FaUtensils,
  FaParking,
  FaRestroom,
  FaHotel,
} from "react-icons/fa";

const Accommodation = () => {
  const { lang } = useLanguage();

  return (
    <section className="accommodation-section" id="accommodation">
      <div className="accommodation-container">

        {/* Header */}
        <div className="accommodation-header">
          <FaHotel className="accommodation-icon" />
          <h2>
            {lang === "te"
              ? "నివాసం & సౌకర్యాలు"
              : "Accommodation & Facilities"}
          </h2>
        </div>

        {/* Facilities */}
        <div className="accommodation-list">

          <div className="facility-card">
            <FaBed />
            <p>
              {lang === "te"
                ? "భక్తుల గెస్ట్ హౌస్"
                : "Devotee Guest House"}
            </p>
          </div>

          <div className="facility-card">
            <FaUtensils />
            <p>
              {lang === "te"
                ? "భోజనశాల / అన్నదానం"
                : "Dining Hall / Annadanam"}
            </p>
          </div>

          <div className="facility-card">
            <FaParking />
            <p>
              {lang === "te"
                ? "పార్కింగ్ సదుపాయం"
                : "Parking Facility"}
            </p>
          </div>

          <div className="facility-card">
            <FaRestroom />
            <p>
              {lang === "te"
                ? "వాష్‌రూమ్స్"
                : "Clean Washrooms"}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Accommodation;
