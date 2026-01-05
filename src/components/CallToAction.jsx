import React from 'react';

const CallToAction = ({ data }) => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold font-heading text-text-primary mb-3 min-h-[1.5em]">
          {data?.heading}
        </h2>
        <p className="font-body text-text-primary max-w-3xl mx-auto whitespace-pre-line mb-6 min-h-[3em]">
          {data?.body}
        </p>
        <button className="bg-primary text-white font-body font-bold py-3 px-8 rounded hover:opacity-90 transition-opacity">
          Contact Us Today
        </button>
      </div>
    </section>
  );
};

export default CallToAction;