import React from 'react';
import { Heart, Users, Award, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Recetas Familiares",
      description: "Preparados con recetas tradicionales transmitidas de generación en generación"
    },
    {
      icon: Users,
      title: "Ambiente Familiar",
      description: "Un lugar donde toda la familia puede disfrutar de la auténtica comida mexicana"
    },
    {
      icon: Award,
      title: "Ingredientes Premium",
      description: "Solo utilizamos los ingredientes más frescos y de la más alta calidad"
    },
    {
      icon: Clock,
      title: "Servicio Rápido",
      description: "Comida deliciosa preparada al momento sin largos tiempos de espera"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nuestra Historia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desde 2014, Taconmadres ha sido el hogar de los sabores auténticos mexicanos, 
            donde cada taco cuenta una historia de tradición, pasión y amor por la cocina.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Interior de la taquería"
              className="rounded-2xl shadow-xl w-full h-80 object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm">Años sirviendo</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Una Tradición que Perdura
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Todo comenzó como un sueño familiar: llevar los sabores auténticos de México 
              a cada mesa. Con recetas heredadas de nuestras abuelas y el compromiso de 
              usar solo ingredientes frescos, hemos creado un lugar donde cada bocado 
              es una experiencia memorable.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Hoy, somos orgullosamente una de las taquerías más queridas de la ciudad, 
              conocidos por nuestros tacos al pastor, carnitas y salsas artesanales que 
              despiertan los sentidos.
            </p>
            
            <div className="flex items-center space-x-4">
              <img 
                src="https://images.pexels.com/photos/3771120/pexels-photo-3771120.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2"
                alt="Chef propietario"
                className="w-16 h-16 rounded-full object-cover border-4 border-red-200"
              />
              <div>
                <div className="font-semibold text-gray-800">Chef María González</div>
                <div className="text-gray-600">Fundadora & Chef Principal</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group hover:scale-105 transform transition-transform duration-300"
              >
                <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full p-4 w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;