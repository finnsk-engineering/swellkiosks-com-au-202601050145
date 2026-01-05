import React from 'react';

const Gallery = ({ data }) => {
  return (
    <section className="bg-bg-primary">
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold font-heading text-center text-text-primary mb-8 min-h-[1.5em]">
          {data?.heading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data?.images?.map((image, index) => image && (
            <div key={index} className="w-full aspect-square rounded overflow-hidden shadow-lg">
              <img
                src={image?.src}
                alt={image?.alt || `Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;