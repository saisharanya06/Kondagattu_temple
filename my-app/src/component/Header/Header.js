import React, { useState, useEffect } from "react";
import "./Header.css";
import { useLanguage } from "../../context/LanguageContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { lang, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  const text = {
    te: {
      templeName: "కొండగట్టు",
      templeSub: "ఆంజనేయ స్వామి",
      home: "హోమ్",
      temple: "ఆలయం",
      about: "ఆలయ పరిచయం",
      deities: "దైవం & విశిష్టత",
      events: "వేడుకలు",
      sevas: "పూజలు & దర్శనం",
      services: "పూజలు / సేవలు",
      darshan: "దర్శనం & టైమింగ్స్",
      pilgrims: "యాత్రికులకు",
      reach: "ఎలా చేరుకోవాలి",
      accommodation: "నివాసం & సౌకర్యాలు",
      donation: "దానం",
      gallery: "గ్యాలరీ",
      contact: "సంప్రదింపు",
      expand: "విశాలం చేయండి",
    },
    en: {
      templeName: "Kondagattu",
      templeSub: "Anjaneya Swamy",
      home: "Home",
      temple: "Temple",
      about: "About / History",
      deities: "Deities & Significance",
      events: "Events & Festivals",
      sevas: "Sevas & Darshan",
      services: "Pooja / Seva",
      darshan: "Darshan & Hours",
      pilgrims: "Pilgrims",
      reach: "How to Reach",
      accommodation: "Accommodation",
      donation: "Donations",
      gallery: "Gallery",
      contact: "Contact",
      expand: "Explore",
    },
  };

  const t = text[lang];

  return (
    <>
      <header className="temple-header">
        <div className="temple-header-container">

          <Link to="/" className="temple-brand">
            <div className="temple-logo"><span>ॐ</span></div>
            <div className="temple-title">
              <h1>{t.templeName}</h1>
              <p>{t.templeSub}</p>
            </div>
          </Link>

          <nav className="temple-nav">
            <Link to="/">{t.home}</Link>

            <div className="nav-group">
              <button className="nav-parent">{t.temple}</button>
              <div className="nav-dropdown">
                <Link to="/about">{t.about}</Link>
                <Link to="/deities">{t.deities}</Link>
                <Link to="/events">{t.events}</Link>
              </div>
            </div>

            <div className="nav-group">
              <button className="nav-parent">{t.sevas}</button>
              <div className="nav-dropdown">
                <Link to="/sevas">{t.services}</Link>
                <Link to="/darshan">{t.darshan}</Link>
              </div>
            </div>

            <div className="nav-group">
              <button className="nav-parent">{t.pilgrims}</button>
              <div className="nav-dropdown">
                <Link to="/reach">{t.reach}</Link>
                <Link to="/accommodation">{t.accommodation}</Link>
                <Link to="/donations">{t.donation}</Link>
                <Link to="/faq">FAQ</Link>
              </div>
            </div>

            <Link to="/gallery">{t.gallery}</Link>
            <Link to="/contact">{t.contact}</Link>
          </nav>

          <div className="temple-actions desktop-only">
            <div className="lang-switch" onClick={toggleLanguage}>
              🌐 <span>{lang === "te" ? "EN" : "TE"}</span>
            </div>
            <button className="temple-cta">{t.expand}</button>
          </div>

          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span><span></span><span></span>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
<div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
  <div className="mobile-menu-inner">

    {/* HOME */}
    <Link className="mobile-main primary" to="/" onClick={() => setMenuOpen(false)}>
      {t.home}
    </Link>

    {/* TEMPLE */}
    <div className="mobile-section">
      <h4 className="mobile-section-title">{t.temple}</h4>
      <div className="mobile-card">
        <Link to="/about" onClick={() => setMenuOpen(false)}>{t.about}</Link>
        <Link to="/deities" onClick={() => setMenuOpen(false)}>{t.deities}</Link>
        <Link to="/events" onClick={() => setMenuOpen(false)}>{t.events}</Link>
      </div>
    </div>

    {/* SEVAS */}
    <div className="mobile-section">
      <h4 className="mobile-section-title">{t.sevas}</h4>
      <div className="mobile-card">
        <Link to="/sevas" onClick={() => setMenuOpen(false)}>{t.services}</Link>
        <Link to="/darshan" onClick={() => setMenuOpen(false)}>{t.darshan}</Link>
      </div>
    </div>

    {/* PILGRIMS */}
    <div className="mobile-section">
      <h4 className="mobile-section-title">{t.pilgrims}</h4>
      <div className="mobile-card">
        <Link to="/reach" onClick={() => setMenuOpen(false)}>{t.reach}</Link>
        <Link to="/accommodation" onClick={() => setMenuOpen(false)}>{t.accommodation}</Link>
        <Link to="/donations" onClick={() => setMenuOpen(false)}>{t.donation}</Link>
        <Link to="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
      </div>
    </div>

    {/* SINGLE LINKS */}
    <Link className="mobile-main" to="/gallery" onClick={() => setMenuOpen(false)}>
      {t.gallery}
    </Link>

    <Link className="mobile-main" to="/contact" onClick={() => setMenuOpen(false)}>
      {t.contact}
    </Link>

    <div className="mobile-divider" />

    {/* ACTIONS */}
    <div className="mobile-actions">
      <div className="lang-switch" onClick={toggleLanguage}>
        🌐 <span>{lang === "te" ? "EN" : "TE"}</span>
      </div>
      <button className="temple-cta">{t.expand}</button>
    </div>

  </div>
</div>

    </>
  );
};

export default Header;
