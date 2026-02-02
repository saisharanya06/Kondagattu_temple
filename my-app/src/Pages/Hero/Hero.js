import React from "react";
import "./Hero.css";
import { useLanguage } from "../../context/LanguageContext";
import heroImage from "../../assets/hero-temple.jpg";
import {
  FaHome,
  FaOm,
  FaMapMarkerAlt,
  FaPrayingHands,
  FaCalendarAlt,
  FaArrowRight,
  FaDonate,
} from "react-icons/fa";

const Hero = () => {
  const { lang } = useLanguage();

  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">

        {/* Breadcrumb */}
        <div className="hero-breadcrumb">
          <FaHome />
          {lang === "te" ? "హోమ్" : "Home"}
        </div>

        {/* Title */}
        <h1 className="hero-title">
          {lang === "te"
            ? "శ్రీ కొండగట్టు ఆంజనేయ స్వామి ఆలయం"
            : "Sri Kondagattu Anjaneya Swamy Temple"}
        </h1>

        {/* Tagline */}
        <p className="hero-quote">
          {lang === "te"
            ? "శ్రీ ఆంజనేయ స్వామి ఆలయం — కొండగట్టు"
            : "Divine Hilltop Shrine of Lord Hanuman"}
        </p>

        {/* CTA Buttons */}
        <div className="hero-actions">
          <button className="hero-primary">
            <FaArrowRight />
            {lang === "te" ? "దర్శనం బుక్ చేయండి" : "Book Darshan"}
          </button>

          <button className="hero-secondary">
            <FaDonate />
            {lang === "te" ? "విరాళం చేయండి" : "Donate Now"}
          </button>
        </div>

        {/* Highlights (2 x 2 Grid) */}
        <ul className="hero-highlights">
          <li>
            <FaOm />
            <span>
              {lang === "te"
                ? "స్వయంభూ ఆంజనేయ స్వామి విగ్రహం"
                : "Swayambhu idol of Lord Hanuman"}
            </span>
          </li>

          <li>
            <FaMapMarkerAlt />
            <span>
              {lang === "te"
                ? "జగిత్యాల జిల్లా, తెలంగాణ"
                : "Located in Jagtial District, Telangana"}
            </span>
          </li>

          <li>
            <FaPrayingHands />
            <span>
              {lang === "te"
                ? "దీక్ష & సంకల్పాలకు ప్రసిద్ధి"
                : "Famous for Deeksha & Sankalpa worship"}
            </span>
          </li>

          <li>
            <FaCalendarAlt />
            <span>
              {lang === "te"
                ? "హనుమాన్ జయంతి మహోత్సవం"
                : "Grand Hanuman Jayanti celebrations"}
            </span>
          </li>
        </ul>

      </div>
    </section>
  );
};

export default Hero;
