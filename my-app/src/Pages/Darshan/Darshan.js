import React, { useState } from "react";
import "./Darshan.css";
import { useLanguage } from "../../context/LanguageContext";
import { FaClock, FaBell, FaUser, FaUsers, FaCalendarAlt, FaIdCard, FaPhoneAlt } from "react-icons/fa";

const Darshan = () => {
  const { lang } = useLanguage();
  const [formData, setFormData] = useState({
    darshanType: "",
    date: "",
    timeSlot: "",
    peopleCount: 1,
    devoteeName: "",
    phone: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Data:", formData);
    alert(lang === "te" ? "దర్శనం బుకింగ్ విజయవంతమైంది!" : "Darshan Booking Successful!");
  };

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

        <div className="darshan-grid">
          {/* Left: Timings */}
          <div className="darshan-info-card">
            <div className="darshan-timings">
              <h3>{lang === "te" ? "దర్శన సమయాలు" : "Darshan Timings"}</h3>
              <div className="timing-row">
                <span>{lang === "te" ? "ఉదయం " : "Morning"}</span>
                <strong>6:00 AM – 12:00 PM</strong>
              </div>
              <div className="timing-row">
                <span>{lang === "te" ? "సాయంత్రం " : "Evening"}</span>
                <strong>4:00 PM – 8:00 PM</strong>
              </div>
            </div>

            <div className="darshan-note">
              <FaBell />
              <span>
                {lang === "te"
                  ? "పండుగ రోజుల్లో దర్శన సమయాలు పొడిగించబడవచ్చు."
                  : "Festival days may have extended darshan timings."}
              </span>
            </div>
          </div>

          {/* Right: Booking Form */}
          <div className="darshan-booking-card">
            <h3>{lang === "te" ? "దర్శనం బుక్ చేయండి" : "Book Darshan"}</h3>
            <form className="darshan-booking-form" onSubmit={handleSubmit}>
              
              <div className="darshan-form-group">
                <FaIdCard />
                <select name="darshanType" value={formData.darshanType} onChange={handleChange} required>
                  <option value="">{lang === "te" ? "దర్శనం రకం ఎంచుకోండి" : "Select Darshan Type"}</option>
                  <option value="general">{lang === "te" ? "సర్వ దర్శనం (ఉచితం)" : "General Darshan (Free)"}</option>
                  <option value="special">{lang === "te" ? "ప్రత్యేక దర్శనం (₹100)" : "Special Darshan (₹100)"}</option>
                  <option value="vip">{lang === "te" ? "శీఘ్ర దర్శనం (₹200)" : "VIP Quick Darshan (₹200)"}</option>
                </select>
              </div>

              <div className="darshan-form-row">
                <div className="darshan-form-group">
                  <FaCalendarAlt />
                  <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                </div>
                <div className="darshan-form-group">
                  <FaClock />
                  <select name="timeSlot" value={formData.timeSlot} onChange={handleChange} required>
                    <option value="">{lang === "te" ? "సమయం" : "Slot"}</option>
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                  </select>
                </div>
              </div>

              <div className="darshan-form-group">
                <FaUsers />
                <input 
                  type="number" 
                  name="peopleCount" 
                  min="1" 
                  max="10" 
                  placeholder={lang === "te" ? "వ్యక్తుల సంఖ్య" : "Number of People"} 
                  value={formData.peopleCount} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="darshan-form-group">
                <FaUser />
                <input 
                  type="text" 
                  name="devoteeName" 
                  placeholder={lang === "te" ? "భక్తుని పేరు" : "Devotee Name"} 
                  value={formData.devoteeName} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="darshan-form-group">
                <FaPhoneAlt />
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder={lang === "te" ? "మొబైల్ సంఖ్య" : "Phone Number"} 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <button type="submit" className="darshan-book-btn">
                {lang === "te" ? "ఇప్పుడే బుక్ చేయండి" : "Book Darshan Now"}
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Darshan;
