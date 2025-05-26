import React from 'react';

const HarshSainiTestimonials = ({ content, items }) => {
  // Assuming content has title and subtitle
  // Assuming items is an array of testimonial objects with description, title (for name), and subtitle (for title)
  const sectionTitle = content?.title || 'What clients say';
  const sectionSubtitle = content?.subtitle || '';

  const testimonials = items || [
    { description: 'Everything about this place is simply great! I loved the atmosphere and friendly staff. Incredible job, I wish you luck!', title: 'EMMA GRACELAND', subtitle: null },
    { description: 'Being in the business for almost a decade, I can tell that this place is absolutely worth your time and money. Thank you so much!', title: 'FIONA WILLSON', subtitle: null },
    { description: "You don\'t get many offers while looking for a quick styling and cut. Thanks for the wonderful experience at Nelson Salon.", title: 'HELEN BLACKWOOD', subtitle: null },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">{sectionTitle}</h2>
        {sectionSubtitle && <h3 className="text-xl text-gray-600 mb-8">{sectionSubtitle}</h3>}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-left">
              <p className="text-gray-700 italic mb-4 relative">
                 <span className="absolute top-0 left-0 text-4xl text-gray-300 -mt-4 -ml-4">“</span>
                 {testimonial.description}
                 <span className="absolute bottom-0 right-0 text-4xl text-gray-300 -mb-4 -mr-4">”</span>
              </p>
              <p className="font-semibold mt-6">{testimonial.title}</p>
              {testimonial.subtitle && <p className="text-gray-600 text-sm">{testimonial.subtitle}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HarshSainiTestimonials; 