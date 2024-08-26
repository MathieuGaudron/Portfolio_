import React from 'react';
import './Carousel.css';
import { Link } from 'react-router-dom';

const Projets = () => {
  return (
    <div className="bg-gray-800 bg-opacity-60 p-8 mx-auto max-w-6xl rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-500 sm:p-12">
      <div className="p-6 sm:p-8 text-white">
        <h2 className="text-white text-4xl text-center mb-12 font-bold transform transition-transform hover:scale-105 duration-500">
          Mes projets
        </h2>
      </div>

      <div className="flex justify-center transform transition-transform hover:scale-105 duration-500 cursor-pointer">
        <div className="carousel-container">
          <div className="carousel">
            <div className="carousel-item">
              <Link to='/Projets/AutoEcole'>
                <img src='/assets/HD_CONDUITE/hdconduite_accueil2.png' alt='Auto-ecole'/>
                <div className='absolute inset-0 flex items-center justify-center'>
                  <h3 className='text-white text-2xl font-bold bg-black bg-opacity-75 p-4 rounded transform transition-transform hover:scale-125 duration-500 cursor-pointer'>
                    AUTO-ECOLE
                  </h3>
                </div>
              </Link>
            </div>
            <div className="carousel-item">
              <Link to='/'>
                <img src='/assets/Auto-ecole.png' alt='Projet 2'/>
              </Link>
            </div>
            <div className="carousel-item">
              <Link to='/'>
                <img src='/assets/Auto-ecole.png' alt='Projet 3'/>
              </Link>
            </div>
            <div className="carousel-item">
              <Link to='/'>
                <img src='/assets/Auto-ecole.png' alt='Projet 4'/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projets;
