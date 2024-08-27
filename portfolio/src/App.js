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


          <div className="lg:col-span-2">
            <div className="flex flex-col lg:flex-row gap-8 px-8 mt-12">

              <div className="w-full lg:w-1/2 flex flex-col mb-2" data-aos="fade-up">
                <div className='mb-2'>
                  <Contact />
                </div>

                <div className='my-2'>
                  <Projets />
                </div>
              </div>

              <div className="w-full lg:w-1/2" data-aos="fade-up">
                <Competences />
              </div>
              
            </div>
          </div>

          <Routes>

            <Route exact strict path="/Projets" element={<div data-aos="fade-up"><Projets /></div>} />
            <Route exact strict path="/Propos" element={<div data-aos="fade-up"><Propos /></div>} />
            <Route exact strict path="/Contact" element={<div data-aos="fade-up"><Contact /></div>} />
            <Route exact strict path="/Projets/AutoEcole" element={<div data-aos="fade-up"><AutoEcole /></div>} />
            <Route exact strict path="/Projets/LeBonCoin" element={<div data-aos="fade-up"><LeBonCoin /></div>} />
            <Route exact strict path="/Projets/Puissance4" element={<div data-aos="fade-up"><Puissance4 /></div>} />
            <Route exact strict path="/Projets/Ecommerce" element={<div data-aos="fade-up"><Ecommerce /></div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
