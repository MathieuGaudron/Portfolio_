import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './composant/Sidebar';
import Header from './composant/Header';
import Projets from './composant/Onglets/Projets';
import Propos from './composant/Onglets/Propos';
import Contact from './composant/Onglets/Contact';
import Competences from './composant/Competences';
import AutoEcole from './composant/Onglets/Projets/AutoEcole';
import LeBonCoin from './composant/Onglets/Projets/LeBonCoin';
import Puissance4 from './composant/Onglets/Projets/Puissance4';
import Ecommerce from './composant/Onglets/Projets/Ecommerce';
import Home from './composant/Home';
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

        <div className="relative z-10 flex flex-col">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projets" element={<Projets />} />
            <Route path="/Propos" element={<Propos />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Competences" element={<Competences />} />
            <Route path="/Projets/AutoEcole" element={<AutoEcole />} />
            <Route path="/Projets/LeBonCoin" element={<LeBonCoin />} />
            <Route path="/Projets/Puissance4" element={<Puissance4 />} />
            <Route path="/Projets/Ecommerce" element={<Ecommerce />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
