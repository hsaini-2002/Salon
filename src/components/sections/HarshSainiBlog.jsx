import React from 'react';

const HarshSainiBlog = ({ content, items }) => {
  // Assuming content has a title for the section heading
  // Assuming items is an array of blog post objects with image_url, title, description, and a date field
  const sectionTitle = content?.title || 'Latest Blog Posts'; // Using a more appropriate title for blog section

  const blogPosts = items || [
    { image_url: 'https://via.placeholder.com/400x300?text=Blog+Image+1', title: 'How to choose the best manicure', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla...', date: 'MAY 22, 2018' },
    { image_url: 'https://via.placeholder.com/400x300?text=Blog+Image+2', title: 'Healthy anti-age skincare routine', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla...', date: 'MAY 22, 2018' },
    { image_url: 'https://via.placeholder.com/400x300?text=Blog+Image+3', title: 'Home hair dyeing 101: 5 steps', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla...', date: 'MAY 22, 2018' },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">{sectionTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden text-left"> {/* Ensure text is left-aligned */}
              <img src={post.image_url} alt={`Blog Post ${index + 1}`} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">{post.title}</h4>
                <p className="text-gray-700 mb-4">{post.description}</p>
                <p className="text-gray-500 text-sm">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HarshSainiBlog; 