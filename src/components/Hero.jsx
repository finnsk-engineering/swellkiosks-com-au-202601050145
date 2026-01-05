import React from 'react';

const Hero = ({ data }) => {
  return (
    <section className="bg-bg-primary">
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-text-primary leading-tight mb-4 min-h-[1.5em]">
            {data?.heading}
          </h1>
          <p className="font-body text-lg text-text-primary whitespace-pre-line min-h-[4em]">
            {data?.body}
          </p>
        </div>

        {/* Image Content */}
        {data?.images?.[0]?.src && (
          <div className="w-full h-auto aspect-video rounded overflow-hidden">
            <img
              src={data?.images[0].src}
              alt={data?.images[0].alt || 'Hero image'}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;