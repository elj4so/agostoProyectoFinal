import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-to-r from-red-600 via-orange-600 to-yellow-500">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-current text-yellow-300" />
                ))}
              </div>
              <span className="text-yellow-100 font-medium">Los mejores tacos de la ciudad</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              ¡Sabor que
              <span className="block text-yellow-300">Enamora!</span>
            </h2>
            
            <p className="text-xl md:text-2xl mb-8 text-orange-100 leading-relaxed">
              En Taconmadres preparamos cada taco con ingredientes frescos, recetas tradicionales 
              y todo el amor de la cocina mexicana auténtica.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToMenu}
                className="group bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>Ver Menú</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <a 
                href="tel:+5512345678"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-300 flex items-center justify-center shadow-lg"
              >
                Ordenar Ahora
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-orange-400">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">10+</div>
                <div className="text-orange-100 text-sm">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">50+</div>
                <div className="text-orange-100 text-sm">Variedades de tacos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">1000+</div>
                <div className="text-orange-100 text-sm">Clientes felices</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Deliciosos tacos mexicanos"
                className="w-full h-96 md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-red-600 rounded-full p-6 shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
              <div className="text-center">
                <div className="text-2xl font-bold">¡Nuevo!</div>
                <div className="text-sm font-medium">Tacos de pastor</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Desliza hacia abajo</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;