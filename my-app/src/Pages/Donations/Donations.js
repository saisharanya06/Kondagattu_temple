import React from "react";
import "./Donations.css";
import { useLanguage } from "../../context/LanguageContext";
import {
  FaDonate,
  FaUniversity,
  FaEnvelopeOpenText,
  FaCreditCard,
} from "react-icons/fa";

const Donations = () => {
  const { lang } = useLanguage();

  return (
    <section className="donation-section" id="donations">
      <div className="donation-container">

        {/* Header */}
        <div className="donation-header">
          <FaDonate className="donation-icon" />
          <h2>
            {lang === "te" ? "దానం" : "Donations"}
          </h2>
          <p>
            {lang === "te"
              ? "శ్రీ కొండగట్టు ఆంజనేయ స్వామి ఆలయానికి మీ సేవ"
              : "Support Sri Kondagattu Anjaneya Swamy Temple"}
          </p>
        </div>

        {/* Donation Methods */}
        <div className="donation-cards">

          <div className="donation-card">
            <FaCreditCard />
            <h4>
              {lang === "te"
                ? "ఆన్‌లైన్ చెల్లింపులు"
                : "Online Payments"}
            </h4>
            <p>
              UPI / Credit Card / Debit Card / Netbanking
            </p>
          </div>

          <div className="donation-card">
            <FaEnvelopeOpenText />
            <h4>
              {lang === "te"
                ? "ఆటోమెటిక్ రసీదు"
                : "Auto Email Receipt"}
            </h4>
            <p>
              {lang === "te"
                ? "చెల్లింపు అనంతరం రసీదు ఈమెయిల్ ద్వారా"
                : "Receipt sent automatically to your email"}
            </p>
          </div>

          <div className="donation-card">
            <FaUniversity />
            <h4>
              {lang === "te"
                ? "ట్రస్ట్ వివరాలు"
                : "Trust Details"}
            </h4>
            <p>
              {lang === "te"
                ? "ఆలయ ట్రస్ట్ ఆధ్వర్యంలో నిర్వహణ"
                : "Managed by the Temple Trust"}
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="donation-action">
          <button className="donate-btn">
            {lang === "te"
              ? "ఇప్పుడే దానం చేయండి"
              : "Donate Now"}
          </button>
        </div>

      </div>
    </section>
  );
};

export default Donations;
