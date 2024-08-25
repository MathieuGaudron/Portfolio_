import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="bg-gray-800 p-8 my-8 mx-auto max-w-3xl rounded-lg shadow-lg bg-opacity-60 transform transition-transform hover:scale-105 duration-500 ">

      <h2 className='text-white text-4xl text-center mb-12 font-bold transform transition-transform hover:scale-105 duration-500'>Mes réseaux</h2>

      <div className="mt-2 mx-auto flex flex-row space-x-4 justify-around">
        <Link to="https://github.com/MathieuGaudron" target="_blank" rel="noopener noreferrer">
          <img 
            src="/assets/github.png" 
            alt="GitHub" 
            className="w-16 h-16 transition-transform transform hover:scale-125 hover:brightness-50 hover:contrast-125 hover:shadow-lg duration-300 cursor-pointer"
          />
        </Link>

        <Link to="https://www.linkedin.com/in/mathieu-gaudron-ponch/" target="_blank" rel="noopener noreferrer">
          <img 
            src="/assets/linkedin.png" 
            alt="LinkedIn" 
            className="w-16 h-16 transition-transform transform hover:scale-125 hover:brightness-150 duration-300 cursor-pointer"
          />
        </Link>

        <a 
          href="/CV_DEV_WEB_MATHIEU_GAUDRON.pdf" 
          download
          className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg transition-transform transform hover:scale-110 hover:bg-blue-600 duration-300 cursor-pointer">
          <span>Télécharger mon CV</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
