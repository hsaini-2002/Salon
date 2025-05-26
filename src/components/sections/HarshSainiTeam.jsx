import React from 'react';

const HarshSainiTeam = ({ content, items }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{content.title}</h2>
          <h3 className="text-xl text-gray-600 mb-6">{content.subtitle}</h3>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">{content.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((member) => (
            <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <div className="relative h-80">
                <img
                  src={member.image_url}
                  alt={member.title}
                  className="w-full h-full object-cover"
                />
                {member.tag && (
                  <span className="absolute top-4 right-4 bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {member.tag}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{member.title}</h3>
                <h4 className="text-lg text-sky-600 mb-4">{member.subtitle}</h4>
                <p className="text-gray-700">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HarshSainiTeam; 