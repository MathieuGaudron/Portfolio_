import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaSymfony, FaDatabase, FaNode, FaLaravel, FaWordpress } from 'react-icons/fa';
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from 'react-icons/si';

const Competences = () => {
  return (
    <div className=" bg-opacity-60 p-12 mx-auto max-w-6xl rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-500">
      <h2 className="text-white text-4xl text-center mb-12 font-bold transform transition-transform hover:scale-105 duration-500">
        Compétences
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 justify-items-center">
        
        <div className="flex flex-col items-center">
          <FaHtml5 className="text-orange-500 w-24 h-24 transition-transform transform hover:scale-125 duration-300 cursor-pointer" />
          <span className="text-white mt-4">HTML5</span>
        </div>

        <div className="flex flex-col items-center">
          <FaCss3Alt className="text-blue-500 w-24 h-24 transition-transform transform hover:scale-125 duration-300 cursor-pointer" />
          <span className="text-white mt-4">CSS3</span>
        </div>

        <div className="flex flex-col items-center">
          <FaJs className="text-yellow-500 w-24 h-24 transition-transform transform hover:scale-125 duration-300 cursor-pointer" />
          <span className="text-white mt-4">JavaScript</span>
        </div>

        <div className="flex flex-col items-center">
          <FaReact className="text-blue-300 w-24 h-24 transition-transform transform hover:scale-125 duration-300 cursor-pointer" />
          <span className="text-white mt-4">React</span>
        </div>

        <div className="flex flex-col items-center">
          <SiTailwindcss className="text-teal-400 w-24 h-24 transition-transform transform hover:scale-125 duration-300 cursor-pointer" />
          <span className="text-white mt-4">Tailwind CSS</span>
        </div>

        <div className="flex flex-col items-center">
          <FaPhp className="text-indigo-500 w-24 h-24 transition-transform transform hover:scale-125 duration-300 cursor-pointer" />
          <span className="text-white mt-4">PHP</span>
        </div>

        <div className="flex flex-col items-center">
          <FaSymfony className="text-white w-24 h-24 transition-transform transform hover:scale-125 duration-300 cursor-pointer" />
          <span className="text-white mt-4">Symfony</span>
        </div>

        <div className="flex flex-col items-center">
          <FaDatabase className="text-yellow-700 w-24 h-24 transition-transform transform hover:scale-125 duration-300 cursor-pointer" />
          <span className="text-white mt-4">MySQL</span>
        </div>

        <div className="flex flex-col items-center">
          <FaNode className="text-green-800 w-24 h-24 transition-transform transform hover:scale-125 duration-300 cursor-pointer" />
          <span className="text-white mt-4">Node JS</span>
        </div>

        <div className="flex flex-col items-center">
          <SiMongodb className="text-green-500 w-24 h-24 transition-transform transform hover:scale-125 duration-300 cursor-pointer" />
          <span className="text-white mt-4">MongoDB</span>
        </div>

        <div className="flex flex-col items-center">
          <FaLaravel className="text-red-500 w-24 h-24 transition-transform transform hover:scale-125 duration-300 cursor-pointer" />
          <span className="text-white mt-4">Laravel</span>
        </div>

        <div className="flex flex-col items-center">
          <FaWordpress className="text-blue-400 w-24 h-24 transition-transform transform hover:scale-125 duration-300 cursor-pointer" />
          <span className="text-white mt-4">WordPress</span>
        </div>

      </div>
    </div>
  );
};

export default Competences;
