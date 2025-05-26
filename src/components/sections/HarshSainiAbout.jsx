import React from 'react';
import { FaStar, FaEye, FaHeart } from 'react-icons/fa';

const HarshSainiAbout = ({ content, items }) => {
  const IconMap = {
    FaStar: FaStar,
    FaEye: FaEye,
    FaHeart: FaHeart,
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{content.title}</h2>
            <h3 className="text-xl text-gray-600 mb-6">{content.subtitle}</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">{content.description}</p>
            <a
              href={content.cta_link}
              className="inline-block bg-sky-200 hover:bg-sky-300 text-gray-800 font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              {content.cta_text}
            </a>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <img
              src={content.image_url}
              alt="Salon Interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Mission, Vision, Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => {
            const Icon = IconMap[item.icon];
            return (
              <div key={item.id} className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="text-4xl text-sky-500 mb-4">
                  {Icon && <Icon />}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <h4 className="text-lg text-sky-600 mb-4">{item.subtitle}</h4>
                <p className="text-gray-700">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HarshSainiAbout; 