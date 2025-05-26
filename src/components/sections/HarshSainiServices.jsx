import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaPaintBrush, FaHeart, FaCut, FaMagic, FaSmile } from 'react-icons/fa';
import Link from 'next/link';

// Map string icon names to React components
const IconMap = {
  FaPaintBrush: FaPaintBrush,
  FaHeart: FaHeart,
  FaCut: FaCut,
  FaMagic: FaMagic,
  FaSmile: FaSmile,
};

const HarshSainiServices = ({ content, items }) => {
  // Assuming content has title, subtitle, description
  // Assuming items is an array of service objects with icon (string name or image URL), title, description
  const sectionTitle = content?.title || 'Service beyond expectation';
  const sectionSubtitle = content?.subtitle || '';
  const sectionDescription = content?.description || 'Our salon is the territory created purely for women who appreciate premium quality, time and flawless look. At our place, you have a chance to really good time.';

  // Updated service items with available icons (keeping the structure, logic handles rendering)
  // Using image URLs for default services for consistency if the items prop is not provided.
  const services = items || [
    { icon: 'https://cdn-icons-png.flaticon.com/128/17828/17828559.png', title: 'Hairstyle', description: 'thing starts with a haircut!' },
    { icon: 'https://cdn-icons-png.flaticon.com/128/3163/3163173.png', title: 'Makeup', description: 'For a special occasion our makeup artists make...' },
    { icon: 'https://cdn-icons-png.flaticon.com/128/7305/7305214.png', title: 'Cosmetology', description: 'We offer top skin care programs for your...' },
    { icon: 'https://cdn-icons-png.flaticon.com/128/4614/4614227.png', title: 'Depilation', description: 'Hair removal at our salon is painless, fast...' },
    { icon: 'https://cdn-icons-png.flaticon.com/128/17828/17828559.png', title: 'Manicure', subtitle: 'Nail Care', description: 'Basic manicure and pedicure, gel, or acrylic -...' },
    { icon: 'https://cdn-icons-png.flaticon.com/128/3461/3461923.png', title: 'Pedicure', subtitle: 'Foot Care', description: 'Relaxing pedicure services to keep your feet healthy and beautiful.' },
    { icon: 'https://cdn-icons-png.flaticon.com/128/2763/2763384.png', title: 'Facials', subtitle: 'Skin Treatments', description: 'Rejuvenate your skin with our variety of facial treatments.' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">{sectionTitle}</h2>
        {sectionSubtitle && <h3 className="text-xl text-gray-600 mb-2">{sectionSubtitle}</h3>}
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto">{sectionDescription}</p>
        
        <Slider {...settings}>
          {services.map((service, index) => {
            // First check for image_url, then icon, then fallback to React icons
            const iconContent = service.image_url ? (
              <img src={service.image_url} alt={`${service.title} icon`} className="h-10 w-10" />
            ) : service.icon && service.icon.startsWith('http') ? (
              <img src={service.icon} alt={`${service.title} icon`} className="h-10 w-10" />
            ) : IconMap[service.icon] ? (
              React.createElement(IconMap[service.icon])
            ) : null;
              
            return (
              <div key={index} className="px-2">
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center h-64">
                  <div className="text-4xl mb-4 flex justify-center items-center">
                    {iconContent}
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            );
          })}
        </Slider>

        <Link href="/services">
          <button className="mt-12 px-8 py-3 bg-sky-200 hover:bg-sky-300 text-gray-800 font-semibold rounded-lg transition-colors duration-300">
            View All Services
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HarshSainiServices; 