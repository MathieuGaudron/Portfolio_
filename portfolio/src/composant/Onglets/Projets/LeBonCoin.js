import React, { useState } from 'react';
import './CarouselProjet.css';
import './Projets.css';

const LeBonCoin = () => {
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/assets/Leboncoin/leboncoin_accueil.png',
    '/assets/Leboncoin/leboncoin_crud.png',
    '/assets/Leboncoin/leboncoin_recherche.png'
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
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getImageClassName = (index) => {
    if (index === currentImageIndex) {
      return 'carousel-image active';
    } else {
      return 'carousel-image';
    }
  };

  let carouselContent;
  if (carouselOpen) {
    carouselContent = (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
        <div className="relative max-w-4xl mx-auto p-4 rounded-lg carousel-container">
          <div className="relative carousel-container">
            <div className="carousel-slide">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Screenshot ${index + 1}`}
                  className={getImageClassName(index)}/>
              ))}
            </div>
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 btn-prevnext opacity-70 hover:scale-105 transition-transform duration-300">
              &lt;
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 btn-prevnext opacity-70 hover:scale-105 transition-transform duration-300">
              &gt;
            </button>
          </div>
          <button
            onClick={closeCarousel}
            className="absolute top-2 right-2 btn-close opacity-60 transition-transform duration-300">
            X
          </button>
        </div>
      </div>
    );
  }

  let videoContent;
  if (videoOpen) {
    videoContent = (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
        <div className="relative max-w-4xl mx-auto p-4 rounded-lg">
          <div className="relative">
            <video
              src="/assets/Leboncoin/leboncoin_clip.mp4"
              autoPlay
              controls
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <button
            onClick={closeVideo}
            className="absolute top-2 right-2 btn-close opacity-60 transition-transform duration-300">
            X
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center text-center py-16 px-4">
      <div className="mb-12" data-aos="fade-in">
        <h1 className="text-5xl font-bold text-white mb-4 transform transition-transform hover:scale-105 duration-500">
          LE BONCOIN
        </h1>
        <p className='text-white transform transition-transform hover:scale-105 duration-500'>
          <span className='font-bold text-white'>Technologies utilisées : </span>
          Laravel / Twig
        </p>
        <p className='text-white transform transition-transform hover:scale-105 duration-500'>
          Projet d'école visant à reproduire un site d'annonces
        </p>
      </div>

      <div className="mb-12" data-aos="fade-in" data-aos-delay="200">
        <button
          onClick={openCarousel}
          className="btn-grad text-white px-6 py-3 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-500"
        >
          <h2 className="text-3xl font-bold">Photos</h2>
        </button>
      </div>

      {/* <div className="mb-12" data-aos="fade-in" data-aos-delay="400">
        <button
          onClick={openVideo}
          className="btn-grad2 text-white px-6 py-3 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-500"
        >
          <h2 className="text-3xl font-bold">Vidéo</h2>
        </button>
      </div> */}

      {carouselContent}
      {videoContent}
    </div>
  );
};

export default LeBonCoin;
