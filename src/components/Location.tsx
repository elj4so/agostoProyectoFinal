import React from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

const Location = () => {
  const schedules = [
    { day: "Lunes - Viernes", hours: "10:00 AM - 10:00 PM" },
    { day: "Sábado", hours: "9:00 AM - 11:00 PM" },
    { day: "Domingo", hours: "9:00 AM - 9:00 PM" }
  ];

  return (
    <section id="ubicacion" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Encuéntranos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos ubicados en el corazón de la ciudad, esperándote con los 
            mejores tacos y un ambiente familiar que te hará sentir como en casa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl h-96 lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.8267891234567!2d-99.1677!3d19.4326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5b5b5b5%3A0x1234567890abcdef!2sCiudad%20de%20México%2C%20CDMX!5e0!3m2!1ses!2smx!4v1234567890123!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Taconmadres"
            />
            
            {/* Map Overlay */}
            <div className="absolute top-4 left-4 bg-white rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="bg-red-600 text-white rounded-full p-2">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Taconmadres</div>
                  <div className="text-sm text-gray-600">Taquería Tradicional</div>
                </div>
              </div>
            </div>
          </div>

          {/* Location Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 text-red-600 rounded-full p-3">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Dirección</h3>
                  <p className="text-gray-600 mb-4">
                    Av. Revolución 123, Col. Centro<br />
                    Ciudad de México, CDMX 06000
                  </p>
                  <a 
                    href="https://maps.google.com/?q=Av.+Revolución+123,+Ciudad+de+México"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-red-600 hover:text-red-700 font-semibold transition-colors duration-300"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Cómo llegar</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 text-orange-600 rounded-full p-3">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Horarios de Atención</h3>
                  <div className="space-y-3">
                    {schedules.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                        <span className="font-medium text-gray-800">{schedule.day}</span>
                        <span className="text-gray-600">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-green-700 font-semibold">Abierto ahora</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 text-blue-600 rounded-full p-3">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Contacto</h3>
                  <p className="text-gray-600 mb-4">
                    ¿Preguntas? ¿Pedidos especiales? ¡Contáctanos!
                  </p>
                  <div className="flex flex-col space-y-2">
                    <a 
                      href="tel:+5512345678"
                      className="flex items-center space-x-2 text-gray-800 hover:text-red-600 transition-colors duration-300"
                    >
                      <Phone className="w-4 h-4" />
                      <span>(55) 1234-5678</span>
                    </a>
                    <a 
                      href="mailto:hola@taconmadres.mx"
                      className="text-gray-800 hover:text-red-600 transition-colors duration-300"
                    >
                      hola@taconmadres.mx
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">¡Te Esperamos!</h3>
              <p className="mb-6">Ven y disfruta de la mejor experiencia taquera de la ciudad</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+5512345678"
                  className="bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-yellow-50 transition-colors duration-300"
                >
                  Llamar para Reservar
                </a>
                <a 
                  href="https://maps.google.com/?q=Av.+Revolución+123,+Ciudad+de+México"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-all duration-300"
                >
                  Ver en Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;