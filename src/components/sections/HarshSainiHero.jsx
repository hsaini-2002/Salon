import React from 'react';

const HarshSainiHero = ({ content }) => {
  // Assuming content might have a background_url, title, and cta_text/cta_link
  const backgroundUrl = content?.background_url || 'https://t3.ftcdn.net/jpg/01/28/40/94/240_F_128409476_MjNDWNfvtj4itt1Xn0kxDm4b16G1bepn.jpg'; // Placeholder background image
  const headline = content?.title || 'Brush touch of perfection';
  const ctaText = content?.cta_text || 'VIEW OUR SERVICES';
  const ctaLink = content?.cta_link || '#services';

  return (
    <div
      className="relative bg-cover bg-center text-white flex items-center h-screen"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div> {/* Adjusted Overlay opacity */}
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-6xl font-bold mb-6 max-w-lg leading-tight">{headline}</h1> {/* Adjusted font size and spacing */}
        <button className="bg-sky-200 hover:bg-sky-300 text-gray-800 font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-300"> {/* Changed to light blue */}
          <a href={ctaLink}>{ctaText}</a>
        </button>
      </div>
    </div>
  );
};

export default HarshSainiHero; 