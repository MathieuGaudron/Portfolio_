import React, { useState } from 'react';
import '../Carousel.css'; 

const AutoEcole = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/assets/HD_CONDUITE/hdconduite_accueil.png',
    '/assets/HD_CONDUITE/hdconduite_auto.png',
    '/assets/HD_CONDUITE/hdconduite_moto.png'
  ];

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
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
        <h2 className="text-3xl font-bold text-white mb-6 transform transition-transform hover:scale-105 duration-500">
          Cliquez pour voir les photos du projet !
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="relative">
              <img 
                src={src} 
                alt={`Screenshot ${index + 1}`} 
                className='rounded-lg shadow-lg cursor-pointer'
                onClick={() => openModal(index)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6 transform transition-transform hover:scale-105 duration-500">
          Cliquez pour voir la vidéo du projet !
        </h2>
        <div className="relative w-full max-w-4xl mx-auto">
          <video 
            src="/assets/HD_CONDUITE/hdconduite_clip.mp4" 
            controls
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative max-w-4xl mx-auto">
            <img src={images[currentImageIndex]} alt={`Modal Image ${currentImageIndex + 1}`} className="w-full h-auto rounded-lg shadow-lg" />
            <button 
              onClick={prevImage} 
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-700"
            >
              &lt;
            </button>
            <button 
              onClick={nextImage} 
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-700"
            >
              &gt;
            </button>
            <button 
              onClick={closeModal} 
              className="absolute top-2 right-2 bg-black text-white p-2 rounded-full hover:bg-gray-700"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AutoEcole;
