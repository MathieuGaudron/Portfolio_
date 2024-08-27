import React, { useState } from 'react';
import './CarouselProjet.css';
import "./Projets.css";

const Puissance4 = () => {
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/assets/Puissance4/puissance4_choix.png',
    '/assets/Puissance4/puissance4_grille.png',
    '/assets/Puissance4/puissance4_victoire.png'
  ];

  const openCarousel = () => {
    setCarouselOpen(true);
  };

  const closeCarousel = () => {
    setCarouselOpen(false);
  };

  const openVideo = () => {
    setVideoOpen(true);
  };

  const closeVideo = () => {
    setVideoOpen(false);
  };

  const prevImage = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(images.length - 1);
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const nextImage = () => {
    if (currentImageIndex === images.length - 1) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  return (
    <div className="flex flex-col items-center text-center py-16 px-4">
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-white mb-4 transform transition-transform hover:scale-105 duration-500">
          Projet Auto-École
        </h1>
        <p className='text-white transform transition-transform hover:scale-105 duration-500'>
          Découvrez le projet d'auto-école (site vitrine). Ce projet a été conçu pour un ami ayant une auto-école.
        </p>
      </div>

      <div className="mb-12">
        <button 
          onClick={openCarousel}
          className="btn-grad text-white px-6 py-3 rounded-lg shadow-lgtransform transition-transform hover:scale-105 duration-500">
          <h2 className="text-3xl font-bold">
            Photos
          </h2>
        </button>
      </div>

      <div className="mb-12">
        <button 
          onClick={openVideo}
          className="btn-grad2 text-white px-6 py-3 rounded-lg shadow-lgtransform transition-transform hover:scale-105 duration-500">
          <h2 className="text-3xl font-bold">
            Vidéo
          </h2>
        </button>
      </div>


      {carouselOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative max-w-4xl mx-auto  p-4 rounded-lg">
            <div className="relative">
              <img 
                src={images[currentImageIndex]} 
                alt={`Screenshot ${currentImageIndex + 1}`} 
                className="w-full h-auto rounded-lg shadow-lg" />
              <button 
                onClick={prevImage} 
                className="absolute top-1/2 left-4 transform -translate-y-1/2 btn-prevnext opacity-60 transition-transform hover:scale-105 duration-500">
                &lt;
              </button>
              <button 
                onClick={nextImage} 
                className="absolute top-1/2 right-4 transform -translate-y-1/2 btn-prevnext opacity-60 transition-transform hover:scale-105 duration-500">
                &gt;
              </button>
            </div>
            <button 
              onClick={closeCarousel} 
              className="absolute top-2 right-2 btn-close opacity-60 transition-transform hover:scale-110 duration-500">
              X
            </button>
          </div>
        </div>
      )}

 
      {videoOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative max-w-4xl mx-auto p-4 rounded-lg">
            <div className="relative">
              <video 
                src="/assets/Puissance4/puissance4.mp4" 
                autoPlay
                controls
                className="w-full h-auto rounded-lg shadow-lg"/>
            </div>
            <button 
              onClick={closeVideo} 
              className="absolute top-2 right-2 btn-close opacity-60 transition-transform hover:scale-105 duration-500">
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Puissance4;
