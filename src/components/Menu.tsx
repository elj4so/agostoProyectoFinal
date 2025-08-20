import React from 'react';
import { Star, ChefHat, Flame, Users } from 'lucide-react';

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Tacos al Pastor",
      description: "Carne de cerdo marinada con achiote, servida con piña, cebolla y cilantro",
      price: "$15",
      image: "https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2",
      badge: "Más Popular",
      icon: Users
    },
    {
      id: 2,
      name: "Tacos de Carnitas",
      description: "Carne de cerdo confitada lentamente, crujiente por fuera y jugosa por dentro",
      price: "$18",
      image: "https://images.pexels.com/photos/4518842/pexels-photo-4518842.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2",
      badge: "Especialidad",
      icon: ChefHat
    },
    {
      id: 3,
      name: "Tacos de Barbacoa",
      description: "Res cocida a fuego lento por 8 horas, sazonada con especias tradicionales",
      price: "$20",
      image: "https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2",
      badge: "Chef's Choice",
      icon: Flame
    },
    {
      id: 4,
      name: "Tacos de Pollo",
      description: "Pechuga de pollo marinada con especias mexicanas, a la parrilla",
      price: "$12",
      image: "https://images.pexels.com/photos/5474640/pexels-photo-5474640.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2",
      badge: "Saludable",
      icon: Star
    },
    {
      id: 5,
      name: "Tacos de Pescado",
      description: "Pescado fresco empanizado, servido con repollo y salsa de chipotle",
      price: "$16",
      image: "https://images.pexels.com/photos/6107787/pexels-photo-6107787.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2",
      badge: "Temporada",
      icon: Star
    },
    {
      id: 6,
      name: "Tacos Vegetarianos",
      description: "Mix de verduras asadas, frijoles negros, aguacate y queso Oaxaca",
      price: "$14",
      image: "https://images.pexels.com/photos/4958641/pexels-photo-4958641.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2",
      badge: "Veggie",
      icon: Star
    }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Más Popular": return "bg-red-500";
      case "Especialidad": return "bg-orange-500";
      case "Chef's Choice": return "bg-purple-500";
      case "Saludable": return "bg-green-500";
      case "Temporada": return "bg-blue-500";
      case "Veggie": return "bg-emerald-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nuestro Delicioso Menú
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada taco es una obra maestra preparada con ingredientes frescos y recetas 
            tradicionales que han pasado de generación en generación.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Badge */}
                  <div className={`absolute top-4 left-4 ${getBadgeColor(item.badge)} text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1`}>
                    <Icon className="w-4 h-4" />
                    <span>{item.badge}</span>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-white text-gray-800 px-3 py-2 rounded-full font-bold text-lg shadow-lg">
                    {item.price}
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-current text-yellow-400" />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">(4.8)</span>
                    </div>
                    
                    <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-2 rounded-full font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                      Ordenar
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Antojo de algo especial?
          </h3>
          <p className="text-xl mb-8 text-orange-100">
            Llámanos y prepararemos tu orden con todo el amor y sabor que nos caracteriza
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+5512345678"
              className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-50 transition-colors duration-300"
            >
              📞 Llamar Ahora
            </a>
            <a 
              href="https://wa.me/5512345678"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-colors duration-300"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;