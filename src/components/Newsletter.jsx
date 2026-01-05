import React from 'react';

const Newsletter = ({ data }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Subscribed to newsletter!');
  };

  return (
    <section className="bg-primary text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-heading mb-2 min-h-[1.5em]">{data?.heading}</h2>
          <p className="font-body max-w-2xl mx-auto whitespace-pre-line mb-6 min-h-[1.5em]">{data?.body}</p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 rounded-l text-text-primary focus:outline-none"
            />
            <button
              type="submit"
              className="bg-text-primary text-white font-body font-bold py-3 px-6 rounded-r hover:bg-gray-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;