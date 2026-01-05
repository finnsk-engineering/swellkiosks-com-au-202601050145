import React from 'react';

const TextBlock = ({ data }) => {
  return (
    <section className="bg-bg-primary">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <h2 className="text-3xl font-bold font-heading text-text-primary mb-4 min-h-[1.5em]">
          {data?.heading}
        </h2>
        <div className="font-body text-text-primary whitespace-pre-line leading-relaxed min-h-[5em]">
          {data?.body}
        </div>
      </div>
    </section>
  );
};

export default TextBlock;