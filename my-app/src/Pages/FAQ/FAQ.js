import React, { useState } from "react";
import "./FAQ.css";
import { useLanguage } from "../../context/LanguageContext";
import { FaQuestionCircle, FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const { lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      te: "దర్శనం సమయం",
      en: "Darshan Timings",
      teDesc: "దర్శనం సాధారణంగా ఉదయం మరియు సాయంత్రం నిర్వహించబడుతుంది.",
      enDesc: "Darshan is usually available in the morning and evening hours.",
    },
    {
      te: "ఫోటోగ్రఫీ నియమాలు",
      en: "Photography Rules",
      teDesc: "ఆలయం లోపల ఫోటోగ్రఫీ అనుమతి లేదు.",
      enDesc: "Photography is not allowed inside the temple premises.",
    },
    {
      te: "పూజ బుకింగ్ విధానం",
      en: "Pooja Booking Process",
      teDesc: "పూజలను ఆన్‌లైన్ లేదా ఆలయం వద్ద ముందస్తుగా బుక్ చేయాలి.",
      enDesc: "Poojas can be booked online or in advance at the temple.",
    },
    {
      te: "దుస్తుల నియమాలు",
      en: "Dress Code",
      teDesc: "భక్తులు సంప్రదాయ దుస్తులు ధరించాలి.",
      enDesc: "Devotees are advised to wear traditional attire.",
    },
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">

        {/* Header */}
        <div className="faq-header">
          <FaQuestionCircle className="faq-icon" />
          <h2>{lang === "te" ? "తరచూ అడిగే ప్రశ్నలు" : "Frequently Asked Questions"}</h2>
        </div>

        {/* FAQ List */}
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <span>{lang === "te" ? faq.te : faq.en}</span>
                <FaChevronDown />
              </div>

              {openIndex === index && (
                <div className="faq-answer">
                  {lang === "te" ? faq.teDesc : faq.enDesc}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
