import React from 'react';

const ImageBlock = ({ data }) => {
  if (!data?.images?.[0]?.src) {
    return null; // Don't render if there's no image
  }

  return (
    <section className="bg-bg-primary">
      <div className="container mx-auto px-6 py-8">
        <div className="w-full h-[500px] rounded overflow-hidden">
          <img
            src={data?.images[0].src}
            alt={data?.images[0].alt || data?.heading || 'Full-width image'}
            className="w-full h-full object-cover"
          />
        </div>
        {data?.body && (
          <p className="text-center font-body text-text-primary italic mt-4 min-h-[1.5em]">
            {data?.body}
          </p>
        )}
      </div>
    </section>
  );
};

export default ImageBlock;