import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './composant/Sidebar';
import Header from './composant/Header';
import Projets from './composant/Onglets/Projets';
import Propos from './composant/Onglets/Propos';
import Contact from './composant/Onglets/Contact';
import Competences from './composant/Competences';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './index.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
    });
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen">
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover z-[-10]">
          <source src="/assets/gif_espace_noir.mp4" type="video/mp4" />
        </video>

        <Sidebar />

        <div className="relative z-10 flex justify-center flex-col">
          <div data-aos="fade-up">
            <Header />
          </div>

          <div data-aos="fade-up">
            <Propos />
          </div>

          
          <div className="flex flex-col lg:flex-row gap-8 px-8 mt-12" data-aos="fade-up">
            
            <div className="w-full lg:w-1/2">
              <Contact />
            </div>
            
            <div className="w-full lg:w-1/2">
              <Competences />
            </div>
          </div>

          <Routes>
            <Route path="/Projets" element={<div data-aos="fade-up"><Projets /></div>} />
            <Route path="/Propos" element={<div data-aos="fade-up"><Propos /></div>} />
            <Route path="/Contact" element={<div data-aos="fade-up"><Contact /></div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
