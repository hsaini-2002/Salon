import React from 'react';

const HarshSainiGallery = ({ items }) => {
  // Assuming items is an array of image objects with image_url
  const images = items || []; // Use actual items if available, otherwise empty

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={
                `overflow-hidden rounded-lg ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`
              }
            >
              <img
                src={image.image_url}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HarshSainiGallery; 