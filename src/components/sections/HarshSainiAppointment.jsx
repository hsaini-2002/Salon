import React from 'react';

const HarshSainiAppointment = ({ content }) => {
  return (
    <section className="py-16 bg-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 lg:px-16">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{content.title}</h2>
              <h3 className="text-xl text-gray-600 mb-6">{content.subtitle}</h3>
              <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-8">{content.description}</p>
              <a
                href={content.cta_link}
                className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-semibold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105"
              >
                {content.cta_text}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HarshSainiAppointment; 