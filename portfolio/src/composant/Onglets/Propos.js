import React from 'react';

const Propos = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start p-8 text-white rounded-lg mx-auto my-8 max-w-3xl transform transition-transform hover:scale-105 duration-500">
  
      <div className="flex-shrink-0">
        <img 
          src="/assets/photo_cv_epitech.jpg" 
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover shadow-lg mb-6 lg:mb-0 lg:mr-8 transform transition-transform hover:scale-125 duration-500"/>
      </div>

      <div className="text-center lg:text-left transform transition-transform hover:scale-105 duration-500">
        <h3 className="text-lg leading-relaxed font-semibold">
          Découvrez ici mon univers en parcourant mon portfolio. Je présenterai ici mes projets et mon experience. <br /> 
          Je suis étudiant à la <span className="font-bold"> Web@cademie by Epitech</span>, et je suis à la recherche 
          d'une alternance dans le développement web et l'intégration web. <br /> 
          <span className='font-bold'>Je vous souhaite une bonne expérience !</span>
        </h3>
      </div>
    </div>
  );
};

export default Propos;
