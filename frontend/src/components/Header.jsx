import React, { useState } from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

  // Toggle function for the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-white body-font shadow w-full bg-indigo-600">
      <nav className="container mx-auto px-6 md:px-12 py-4">
        <div className="md:flex justify-between items-center">
          <div className="flex justify-between items-center">
          <Link to="/" className="text-white hover:text-red-400">
              <svg className="w-6 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" data-name="Capa 1"
                viewBox="0 0 16.16 12.57">
                <defs />
                <path d="M14.02 4.77v7.8H9.33V8.8h-2.5v3.77H2.14v-7.8h11.88z" />
                <path d="M16.16 5.82H0L8.08 0l8.08 5.82z" />
              </svg>
            </Link>

            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                {isOpen ? (
                  // Close Icon
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  // Open Icon
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <Navigation />
          </div>
        </div>
        <div className={`${isOpen ? "flex" : "hidden"} md:hidden flex-col w-full z-40 bg-indigo-600 rounded mt-4 py-2 overflow-hidden`}>
          <Navigation />
        </div>
      </nav>
    </header>
  );
};

export default Header;


