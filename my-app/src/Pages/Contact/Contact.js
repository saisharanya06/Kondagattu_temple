import React from "react";
import "./Contact.css";
import { useLanguage } from "../../context/LanguageContext";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaUserFriends,
} from "react-icons/fa";

const Contact = () => {
  const { lang } = useLanguage();

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* Header */}
        <div className="contact-header">
          <h2>
            {lang === "te" ? "సంప్రదింపు" : "Contact"}
          </h2>
          <p>
            {lang === "te"
              ? "కొండగట్టు ఆంజనేయ స్వామి ఆలయాన్ని సంప్రదించండి"
              : "Get in touch with Kondagattu Anjaneya Swamy Temple"}
          </p>
        </div>

        <div className="contact-grid">

          {/* Contact Info */}
          <div className="contact-info">

            <div className="contact-item">
              <FaPhoneAlt />
              <span>
                {lang === "te"
                  ? "ఆలయ కార్యాలయం ఫోన్"
                  : "Temple Office Phone"}
                <br />
                <strong>+91 9XXXXXXXXX</strong>
              </span>
            </div>

            <div className="contact-item">
              <FaEnvelope />
              <span>
                {lang === "te"
                  ? "అధికారిక ఇమెయిల్"
                  : "Official Email"}
                <br />
                <strong>kondagattutemple@gmail.com</strong>
              </span>
            </div>

            {/* Social Media */}
            <div className="contact-social">
              <span>
                {lang === "te"
                  ? "సోషల్ మీడియా"
                  : "Follow Us"}
              </span>

              <div className="social-icons">
                <a href="#" aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href="#" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="#" aria-label="Twitter">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h3>
              <FaUserFriends />
              {lang === "te"
                ? "సంప్రదింపు / సేవా సహాయం"
                : "Contact / Volunteer"}
            </h3>

            <form>
              <input
                type="text"
                placeholder={
                  lang === "te" ? "మీ పేరు" : "Your Name"
                }
                required
              />

              <input
                type="email"
                placeholder={
                  lang === "te" ? "ఇమెయిల్" : "Email"
                }
                required
              />

              <textarea
                rows="4"
                placeholder={
                  lang === "te"
                    ? "మీ సందేశం లేదా సేవా అభ్యర్థన"
                    : "Your message or volunteer request"
                }
                required
              ></textarea>

              <button type="submit">
                {lang === "te" ? "పంపండి" : "Submit"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
