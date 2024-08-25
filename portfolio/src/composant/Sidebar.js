import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button 
        onClick={toggleSidebar} 
        className="fixed top-4 left-4 z-30 text-white bg-black p-2 rounded-md focus:outline-none transform transition-transform hover:scale-125 duration-500"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>


      <nav className={`fixed left-0 top-0 h-full w-64 bg-black text-white shadow-lg transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-40`}>

        <button 
          onClick={toggleSidebar}
          className="absolute top-4 right-4 transform transition-transform hover:scale-125 duration-500 text-white focus:outline-none">            
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <h2 className="text-2xl font-bold text-center pt-16">Mes projets</h2>

        <div className="mt-16 space-y-8 flex flex-col items-center">
          <Link 
            to="/puissance4" 
            onClick={toggleSidebar} 
            className="inline-block transform transition duration-300 ease-in-out hover:scale-125">
            Puissance 4
          </Link>
          <Link 
            to="/auto-ecole" 
            onClick={toggleSidebar} 
            className="inline-block transform transition duration-300 ease-in-out hover:scale-125">
            Auto-Ecole (Site-vitrine)
          </Link>
          <Link 
            to="/leboncoin" 
            onClick={toggleSidebar} 
            className="inline-block transform transition duration-300 ease-in-out hover:scale-125">
            Le Boncoin
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
