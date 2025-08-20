import React, { useState } from 'react';
import { Menu, X, MapPin, Clock, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full p-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/12515/12515919.png"
                alt="Logo de Taconmadres"
                className="w-6 h-6"
              />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Taconmadres</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-red-600 transition-colors duration-300 font-medium"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-gray-700 hover:text-red-600 transition-colors duration-300 font-medium"
            >
              Menú
            </button>
            <button 
              onClick={() => scrollToSection('ubicacion')}
              className="text-gray-700 hover:text-red-600 transition-colors duration-300 font-medium"
            >
              Ubicación
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-gray-700 hover:text-red-600 transition-colors duration-300 font-medium"
            >
              Contacto
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>(+52) 618-109-89-99</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md transition-all duration-300"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-left px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md transition-all duration-300"
              >
                Menú
              </button>
              <button 
                onClick={() => scrollToSection('ubicacion')}
                className="text-left px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md transition-all duration-300"
              >
                Ubicación
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-left px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md transition-all duration-300"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;