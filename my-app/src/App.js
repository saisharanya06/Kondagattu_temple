import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import Hero from "./Pages/Hero/Hero";
import About from "./Pages/about/About";
import Deities from "./Pages/Deities/Deities";
import Events from "./Pages/events/Events";
import Sevas from "./Pages/Sevas/Sevas";
import Darshan from "./Pages/Darshan/Darshan";  
import Reach from "./Pages/Reach/Reach";
import Accommodation from "./Pages/Accommodation/Accommodation";
import Donations from "./Pages/Donations/Donations";
import FAQ from "./Pages/FAQ/FAQ";
import Gallery from "./Pages/Gallery/Gallery";
import Contact from "./Pages/Contact/Contact";
import Footer from "./component/Footer/Footer";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/deities" element={<Deities />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sevas" element={<Sevas />} />
          <Route path="/darshan" element={<Darshan />} />
          <Route path="/reach" element={<Reach />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </LanguageProvider>
  );
}

export default App;
