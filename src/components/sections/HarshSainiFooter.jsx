import React from 'react';
import Link from 'next/link';

const HarshSainiFooter = ({ content }) => {
  // Assuming content might have a title for the salon name and a description for copyright
  const salonName = content?.title || 'Eye Catchers';
  const copyrightText = content?.description || 'ThemeREX 2025. All Rights Reserved.';

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        {/* Salon Name */}
        <h3 className="text-2xl font-playfair-display font-bold mb-4">{salonName}</h3>

        {/* Footer Navigation */}
        <nav className="mb-4">
          <ul className="flex flex-wrap justify-center space-x-4">
            <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link href="/services" className="hover:text-gray-400">Services</Link></li>
            <li><Link href="/about" className="hover:text-gray-400">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-gray-400">Contact</Link></li>
          </ul>
        </nav>

        {/* Copyright */}
        <p className="text-sm text-gray-400">{copyrightText}</p>
      </div>
    </footer>
  );
};

export default HarshSainiFooter; 