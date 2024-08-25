import React from 'react';

const Competences = () => {
  return (
    <div className="bg-gray-800 bg-opacity-60 p-12 my-8 mx-auto max-w-6xl rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-500">
      <h2 className="text-white text-4xl text-center mb-12 font-bold transform transition-transform hover:scale-105 duration-500">Compétences</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 justify-items-center">
        
        <div className="flex flex-col items-center">
          <img 
            src="/assets/html.png" 
            alt="HTML" 
            className="w-24 h-24 transition-transform transform hover:scale-150 duration-300 cursor-pointer"
          />
        </div>

        <div className="flex flex-col items-center">
          <img 
            src="/assets/css.png" 
            alt="CSS" 
            className="w-24 h-24 transition-transform transform hover:scale-150 duration-300 cursor-pointer"
          />
        </div>

        <div className="flex flex-col items-center">
          <img 
            src="/assets/javascript.png" 
            alt="JavaScript" 
            className="w-24 h-24 transition-transform transform hover:scale-150 duration-300 cursor-pointer"
          />
        </div>

        <div className="flex flex-col items-center">
          <img 
            src="/assets/react.png" 
            alt="React" 
            className="w-24 h-24 transition-transform transform hover:scale-150 duration-300 cursor-pointer"
          />
        </div>

        <div className="flex flex-col items-center">
          <img 
            src="/assets/tailwind.png" 
            alt="Tailwind CSS" 
            className="w-24 h-24 transition-transform transform hover:scale-150 duration-300 cursor-pointer"
          />
        </div>

        <div className="flex flex-col items-center">
          <img 
            src="/assets/php.png" 
            alt="PHP" 
            className="w-24 h-24 transition-transform transform hover:scale-150 duration-300 cursor-pointer"
          />
        </div>

        <div className="flex flex-col items-center">
          <img 
            src="/assets/symfony.png" 
            alt="Symfony" 
            className="w-24 h-24 transition-transform transform hover:scale-150 duration-300 cursor-pointer"
          />
        </div>

        <div className="flex flex-col items-center">
          <img 
            src="/assets/sql.png" 
            alt="MySQL" 
            className="w-24 h-24 transition-transform transform hover:scale-150 duration-300 cursor-pointer"
          />
        </div>

      </div>
    </div>
  );
};

export default Competences;
