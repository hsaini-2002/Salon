import React from 'react';
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const HarshSainiHeader = ({ content, items }) => {
  // Assuming content might have a logo_url and salon_name, and contact info
  const salonName = content?.title || 'Nelson'; // Using Nelson as per image, or Eye Catchers Salon
  const logoUrl = content?.image_url || '/path/to/nelson-logo.png'; // Placeholder logo
  // Contact info from image: 1.800.216.20.20 and 128 Winston st, New York
  const phoneNumber = '1.800.216.20.20';
  const address = '128 Winston st, New York';

  // Get navigation items from the items prop
  const navItems = items || [];

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center">
        {/* Logo */}
        <img src={logoUrl} alt={`${salonName} Logo`} className="h-8 mr-2" /> {/* Adjusted margin */}
        <span className="text-2xl font-playfair-display font-bold">{salonName}</span> {/* Adjusted font and size */}
      </div>
      <nav className="hidden md:block"> {/* Hide nav on small screens */}
        <ul className="flex space-x-6">
          {navItems.map(item => (
            <li key={item.id}>
              <a href={item.cta_link} className="hover:text-gray-600">{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center space-x-4 text-sm text-gray-700 hidden lg:flex"> {/* Hide contact on smaller screens */}
        <div className="flex items-center">
          <FaPhone className="mr-2 text-gray-600" />
          <span>{phoneNumber}</span>
        </div>
        <div className="flex items-center">
          <FaMapMarkerAlt className="mr-2 text-gray-600" />
          <span>{address}</span>
        </div>
      </div>
       {/* Mobile Menu Icon Placeholder */}
       <div className="md:hidden">
          ☰
       </div>
    </header>
  );
};

export default HarshSainiHeader; 