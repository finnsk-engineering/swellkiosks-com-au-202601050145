import React from 'react';

const Footer = ({ data }) => {
  const currentYear = new Date().getFullYear();
  const copyrightText = data?.body 
    ? data?.body.replace('{year}', currentYear) 
    : `© ${currentYear} Swell Kiosks. All Rights Reserved.`;

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold font-heading">{data?.heading || 'Swell Kiosks'}</h3>
            <p className="font-body text-gray-400 whitespace-pre-line min-h-[1.5em]">
              {copyrightText}
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="font-body hover:text-primary">Privacy Policy</a>
            <a href="#" className="font-body hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;