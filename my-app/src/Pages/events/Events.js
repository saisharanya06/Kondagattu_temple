import React from "react";
import "./Events.css";
import { useLanguage } from "../../context/LanguageContext";
import {
  FaCalendarAlt,
  FaOm,
  FaFilePdf,
} from "react-icons/fa";

const Events = () => {
  const { lang } = useLanguage();

  return (
    <section className="events-section">
      <div className="events-container">

        {/* Header */}
        <div className="events-header">
          <FaOm className="events-icon" />
          <h2>
            {lang === "te" ? "వేడుకలు" : "Events & Festivals"}
          </h2>
          <p>
            {lang === "te"
              ? "కొండగట్టు ఆంజనేయ స్వామి ఆలయం"
              : "Kondagattu Anjaneya Swamy Temple"}
          </p>
        </div>

        {/* Events Grid */}
        <div className="events-grid">

          {/* Hanuman Jayanti */}
          <div className="event-card highlight">
            <FaCalendarAlt className="event-icon" />
            <h3>
              {lang === "te"
                ? "హనుమాన్ జయంతి"
                : "Hanuman Jayanti"}
            </h3>
            <p>
              {lang === "te"
                ? "ఆలయంలో అత్యంత వైభవంగా జరుపుకునే ప్రధాన వేడుక."
                : "The grandest and most celebrated festival at the temple."}
            </p>
          </div>

          {/* Special Abhishekam */}
          <div className="event-card">
            <FaOm className="event-icon" />
            <h3>
              {lang === "te"
                ? "ప్రత్యేక అభిషేక దినాలు"
                : "Special Abhishekam Days"}
            </h3>
            <p>
              {lang === "te"
                ? "ప్రతి వారంలో మరియు ప్రత్యేక పర్వదినాల్లో అభిషేకాలు."
                : "Special abhishekams conducted weekly and on auspicious days."}
            </p>
          </div>

          {/* Annual Calendar */}
          <div className="event-card calendar">
            <FaFilePdf className="event-icon" />
            <h3>
              {lang === "te"
                ? "వార్షిక క్యాలెండర్"
                : "Annual Calendar"}
            </h3>
            <p>
              {lang === "te"
                ? "పండుగలు మరియు సేవల పూర్తి వివరాలు."
                : "Complete list of festivals and temple services."}
            </p>

            <div className="calendar-actions">
              <button>
                {lang === "te" ? "PDF డౌన్‌లోడ్" : "Download PDF"}
              </button>
              <button className="secondary">
                {lang === "te" ? "వెబ్ క్యాలెండర్" : "View Online"}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Events;
