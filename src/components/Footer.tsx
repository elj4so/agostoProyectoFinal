import React from 'react';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, Clock, Star } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com/taconmadres",
      label: "Facebook",
      color: "hover:text-blue-500"
    },
    {
      icon: Instagram,
      href: "https://instagram.com/taconmadres",
      label: "Instagram",
      color: "hover:text-pink-500"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/taconmadres",
      label: "Twitter",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <footer id="contacto" className="bg-gray-800 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full p-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Taconmadres</h3>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Desde 2014, llevamos los sabores auténticos de México a tu mesa. 
              Cada taco es preparado con amor, ingredientes frescos y las recetas 
              tradicionales de nuestras abuelas.
            </p>

            {/* Reviews */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-current text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-300">4.8/5 en Google Reviews</span>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-gray-300 mb-4">Síguenos en nuestras redes:</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-gray-700 p-3 rounded-full transition-all duration-300 hover:scale-110 ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Información de Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Violeta 105</p>
                  <p className="text-gray-300">Hacienda las Flores, 34166 Durango, Dgo.</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-400 flex-shrink-0" />
                <a 
                  href="tel:+5512345678"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  (+52) 618-109-89-99
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-400 flex-shrink-0" />
                <a 
                  href="mailto:hola@taconmadres.mx"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  taconmadres@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Horarios</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-red-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Lun - Vie</p>
                  <p className="text-gray-400 text-sm">10:00 AM - 10:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-red-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Sábado</p>
                  <p className="text-gray-400 text-sm">9:00 AM - 11:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-red-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Domingo</p>
                  <p className="text-gray-400 text-sm">9:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-3 bg-green-900 border border-green-700 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-300 font-semibold text-sm">Abierto ahora</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4">¡Mantente al día con nuestras promociones!</h4>
            <p className="text-gray-300 mb-6">Suscríbete y recibe ofertas especiales directo en tu email</p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input 
                type="email" 
                placeholder="Tu email aquí..."
                className="flex-1 px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
              />
              <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Taconmadres. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-300">
                Términos y Condiciones
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Aviso Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;