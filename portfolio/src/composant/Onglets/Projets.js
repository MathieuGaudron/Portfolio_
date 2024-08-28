import React from 'react';
import { Link } from 'react-router-dom';
import './Carousel.css';

const Projets = () => {
  return (
    <div className="p-8 mx-auto max-w-6xl rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-500 sm:p-12">
      <div className="p-6 sm:p-8 text-white">
        <h2 className="text-white text-4xl text-center  font-bold transform transition-transform hover:scale-105 duration-500">
          Mes projets
        </h2>
      </div>

      <div className="flex justify-center items-center transform transition-transform hover:scale-105 duration-500 cursor-pointer">
        <div className="carousel-container opacity-95">
          <div className="carousel flex justify-center items-center space-x-8">
            <div className="carousel-item">
              <Link to="/Projets/AutoEcole">
                <img src="/assets/HD_CONDUITE/hdconduite_accueil2.png" alt="Auto-ecole" />
                <div className="overlay">
                  <h3 className="text-white text-2xl font-bold bg-black bg-opacity-75 p-4 rounded transition-transform hover:scale-105 duration-500 cursor-pointer">
                    AUTO-ECOLE
                  </h3>
                </div>
              </Link>
            </div>
            <div className="carousel-item">
              <Link to="/Projets/LeBonCoin">
                <img src="/assets/Leboncoin/leboncoin_accueil.png" alt="Projet Le boncoin" />
                <div className="overlay">
                  <h3 className="text-white text-2xl font-bold bg-black bg-opacity-75 p-4 rounded transition-transform hover:scale-105 duration-500 cursor-pointer">
                    LE BONCOIN
                  </h3>
                </div>
              </Link>
            </div>
            <div className="carousel-item">
              <Link to="/Projets/Puissance4">
                <img src="/assets/Puissance4/puissance4_grille.png" alt="Puissance4" />
                <div className="overlay">
                  <h3 className="text-white text-2xl font-bold bg-black bg-opacity-75 p-4 rounded transition-transform hover:scale-105 duration-500 cursor-pointer">
                    PUISSANCE 4
                  </h3>
                </div>
              </Link>
            </div>
            <div className="carousel-item">
              <Link to="/Projets/Ecommerce">
                <img src="/assets/Ecommerce/ecommerce_accueil.png" alt="Ecommerce" />
                <div className="overlay">
                  <h3 className="text-white text-2xl font-bold bg-black bg-opacity-75 p-4 rounded transition-transform hover:scale-105 duration-500 cursor-pointer">
                    E COMMERCE
                  </h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projets;
