import React from "react";
import "./Sevas.css";
import { useLanguage } from "../../context/LanguageContext";
import {
  FaOm,
  FaCalendarAlt,
  FaUser,
  FaPhoneAlt,
  FaCreditCard,
} from "react-icons/fa";

const Sevas = () => {
  const { lang } = useLanguage();

  return (
    <section className="sevas-section">
      <div className="sevas-container">

        {/* Header */}
        <div className="sevas-header">
          <FaOm className="sevas-icon" />
          <h2>{lang === "te" ? "పూజలు" : "Sevas"}</h2>
          <p>
            {lang === "te"
              ? "కొండగట్టు ఆంజనేయ స్వామి ఆలయం"
              : "Kondagattu Anjaneya Swamy Temple"}
          </p>
        </div>

        {/* Seva List */}
        <div className="seva-list">
          <div className="seva-card">
            <h3>{lang === "te" ? "నిత్య అభిషేకం" : "Daily Abhishekam"}</h3>
          </div>

          <div className="seva-card">
            <h3>{lang === "te" ? "అర్చన" : "Archana"}</h3>
          </div>

          <div className="seva-card">
            <h3>{lang === "te" ? "ప్రత్యేక హోమాలు" : "Special Homams"}</h3>
          </div>
        </div>

        {/* Booking Form */}
        <div className="booking-section">
          <h3>
            {lang === "te"
              ? "ఆన్‌లైన్ బుకింగ్"
              : "Online Booking"}
          </h3>

          <form className="booking-form">

            <div className="form-group">
              <FaOm />
              <select required>
                <option value="">
                  {lang === "te" ? "పూజ పేరు ఎంచుకోండి" : "Select Seva"}
                </option>
                
  <option value="daily-abhishekam">
    {lang === "te" ? "నిత్య అభిషేకం" : "Daily Abhishekam"}
  </option>

  <option value="archana">
    {lang === "te" ? "అర్చన" : "Archana"}
  </option>

  <option value="special-homam">
    {lang === "te" ? "ప్రత్యేక హోమాలు" : "Special Homam"}
  </option>
              </select>
            </div>

            <div className="form-group">
              <FaCalendarAlt />
              <input type="date" required />
            </div>

            <div className="form-group">
              <FaUser />
              <input
                type="text"
                placeholder={
                  lang === "te" ? "భక్తుని పేరు" : "Devotee Name"
                }
                required
              />
            </div>

            <div className="form-group">
              <FaPhoneAlt />
              <input
                type="text"
                placeholder={
                  lang === "te"
                    ? "మొబైల్ / ఇమెయిల్"
                    : "Phone / Email"
                }
                required
              />
            </div>

            <div className="form-group">
              <FaCreditCard />
              <select required>
                <option>
                  {lang === "te"
                    ? "చెల్లింపు విధానం"
                    : "Payment Method"}
                </option>
                <option>UPI</option>
                <option>Card</option>
                <option>Net Banking</option>
              </select>
            </div>

            <button type="submit" className="book-btn">
              {lang === "te" ? "బుక్ చేయండి" : "Book Now"}
            </button>
          </form>
        </div>

        {/* Booking Rules */}
        <div className="booking-rules">
          <h4>
            {lang === "te"
              ? "బుకింగ్ నియమాలు"
              : "Booking Rules"}
          </h4>

          <ul>
            <li>
              {lang === "te"
                ? "ముందస్తు బుకింగ్ అవసరం"
                : "Advance booking is required"}
            </li>
            <li>
              {lang === "te"
                ? "రీఫండ్ విధానం వర్తిస్తుంది"
                : "Refund policy is applicable"}
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Sevas;
