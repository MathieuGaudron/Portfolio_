import React, { useEffect } from 'react';
import Propos from '../composant/Onglets/Propos';
import Contact from '../composant/Onglets/Contact';
import Projets from '../composant/Onglets/Projets';
import Competences from '../composant/Competences';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <>
      <section data-aos="fade-in">
        <Propos />
      </section>

      <section className="flex flex-col lg:flex-row gap-8 px-8 mt-12">
        <div className="w-full lg:w-1/2" data-aos="slide-up">
          <Contact />
          <Projets />
        </div>
        <div className="w-full lg:w-1/2" data-aos="zoom-in">
          <Competences />
        </div>
      </section>
    </>
  );
};

export default Home;
