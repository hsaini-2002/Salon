import React from 'react';
import Image from 'next/image';

const HarshSainiServicesPage = ({ content, items }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {content.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {content.description}
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            {/* Service Image */}
            {service.image_url && (
              <div className="relative w-full h-48">
                <img
                  src={service.image_url}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <div className="p-6">
              {/* Service Title and Tag */}
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                {service.tag && (
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    service.tag === 'Popular' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {service.tag}
                  </span>
                )}
              </div>

              {/* Service Subtitle */}
              <p className="text-sm text-blue-600 mb-4">{service.subtitle}</p>

              {/* Service Description */}
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              {/* Pricing Section */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Price Range</span>
                  <span className="font-semibold text-gray-900">{service.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Duration</span>
                  <span className="text-gray-900">{service.duration}</span>
                </div>
              </div>

              {/* Book Now Button */}
              <button className="mt-6 w-full bg-sky-200 hover:bg-sky-300 text-gray-800 font-semibold py-2 px-4 rounded-md transition duration-300">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HarshSainiServicesPage; 