import React from 'react';

// This is a specific implementation of a form.
const ContactForm = ({ data }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    alert('Form submitted!');
  };

  return (
    <section className="bg-bg-primary">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center text-text-primary mb-2 min-h-[1.5em]">
            {data?.heading || 'Contact Us'}
          </h2>
          <p className="font-body text-center text-text-primary whitespace-pre-line mb-8 min-h-[1.5em]">
            {data?.body || 'We\'d love to hear from you. Fill out the form below.'}
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-body text-sm font-medium text-text-primary">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-body text-sm font-medium text-text-primary">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-body text-sm font-medium text-text-primary">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded shadow-sm text-sm font-bold text-white bg-primary hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;