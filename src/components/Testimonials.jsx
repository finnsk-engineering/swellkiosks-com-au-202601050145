import React from 'react';

const Testimonials = ({ data }) => {
  // Assuming data?.body contains testimonials separated by a unique delimiter like '---'
  // Or, a more robust API would provide an array. We adapt to the strict prop rules.
  // For this example, we assume `body` is one testimonial and `heading` is the author.
  // The component could be mapped over an array of testimonial data objects.

  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold font-heading text-center text-text-primary mb-8">
          What Our Clients Say
        </h2>
        <div className="max-w-3xl mx-auto bg-bg-primary p-8 rounded shadow-lg">
          <p className="font-body text-lg italic text-text-primary whitespace-pre-line mb-6 min-h-[4em]">
            "{data?.body}"
          </p>
          <div className="flex items-center">
            {data?.images?.[0]?.src && (
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img
                  src={data?.images[0].src}
                  alt={data?.images[0].alt || data?.heading}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <p className="font-heading font-bold text-text-primary min-h-[1.5em]">
              - {data?.heading}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;