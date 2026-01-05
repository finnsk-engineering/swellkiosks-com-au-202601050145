import React from 'react';

// The Header component uses the data prop for the logo and company name.
// Navigation links are statically defined here for simplicity, as the data prop
// structure is strictly limited to heading, body, and images.

const Header = ({ data }) => {
  const navItems = ['Products', 'Solutions', 'About', 'Contact'];

  return (
    <header className="bg-bg-primary shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          {data?.images?.[0]?.src && (
            <div className="w-10 h-10 mr-3">
              <img
                src={data?.images[0].src}
                alt={data?.images[0].alt || 'Swell Kiosks Logo'}
                className="w-full h-full object-contain" // object-contain is better for logos
              />
            </div>
          )}
          <h1 className="text-2xl font-heading font-bold text-text-primary">
            {data?.heading || 'Swell Kiosks'}
          </h1>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-text-primary font-body hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary text-white font-body font-bold py-2 px-4 rounded hover:opacity-90 transition-opacity"
          >
            Get a Quote
          </a>
        </nav>
        <div className="md:hidden">
          {/* Mobile menu button can be added here */}
          <button className="text-text-primary">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;