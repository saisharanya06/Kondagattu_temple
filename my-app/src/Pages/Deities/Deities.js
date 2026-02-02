import React from "react";
import "./Deities.css";
import { useLanguage } from "../../context/LanguageContext";
import {
  FaOm,
  FaPrayingHands,
  FaStar,
} from "react-icons/fa";

const Deities = () => {
  const { lang } = useLanguage();

  return (
    <section className="deities-section">
      <div className="deities-container">

        {/* Header */}
        <div className="deities-header">
          <FaOm className="deities-icon" />
          <h2>
            {lang === "te"
              ? "దైవం & విశిష్టత"
              : "Deities & Significance"}
          </h2>
          <p>
            {lang === "te"
              ? "కొండగట్టు ఆంజనేయ స్వామి ఆలయం"
              : "Kondagattu Anjaneya Swamy Temple"}
          </p>
        </div>

        {/* Main Deity */}
        <div className="deities-card primary">
          <FaPrayingHands className="card-icon" />
          <h3>
            {lang === "te"
              ? "ప్రధాన దైవం"
              : "Main Deity"}
          </h3>
          <p className="card-title">
            {lang === "te"
              ? "శ్రీ ఆంజనేయ స్వామి (హనుమాన్)"
              : "Lord Anjaneya (Hanuman)"}
          </p>
        </div>

        {/* Other Deities */}
        <div className="deities-card">
          <FaOm className="card-icon" />
          <h3>
            {lang === "te"
              ? "ఇతర దైవాలు"
              : "Other Deities"}
          </h3>
          <p className="card-text">
            {lang === "te"
              ? "వెంకటేశ్వర స్వామి, లక్ష్మీ దేవి"
              : "Lord Venkateswara, Goddess Lakshmi"}
          </p>
        </div>

        {/* Beliefs */}
        <div className="deities-card highlight">
          <FaStar className="card-icon" />
          <h3>
            {lang === "te"
              ? "విశేష నమ్మకాలు"
              : "Sacred Beliefs"}
          </h3>

          <ul>
            <li>
              {lang === "te"
                ? "40 రోజుల దీక్ష"
                : "40-day Deeksha"}
            </li>
            <li>
              {lang === "te"
                ? "సంకల్ప పూజల ఫలితం"
                : "Sankalpa worship fulfills devotees’ wishes"}
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Deities;
