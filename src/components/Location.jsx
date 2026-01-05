import React from 'react';

const Location = ({ data }) => {
  return (
    <section className="bg-bg-primary">
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold font-heading text-text-primary mb-4 min-h-[1.5em]">
            {data?.heading}
          </h2>
          <div className="font-body text-text-primary whitespace-pre-line leading-relaxed min-h-[6em]">
            {data?.body}
          </div>
        </div>
        {data?.images?.[0]?.src && (
          <div className="w-full h-[400px] rounded overflow-hidden shadow-lg">
            {/* This could be an iframe for a map, but an image is used to meet specs */}
            <img
              src={data?.images[0].src}
              alt={data?.images[0].alt || 'Location map'}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Location;