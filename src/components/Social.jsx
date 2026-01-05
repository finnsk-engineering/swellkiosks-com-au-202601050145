import React from 'react';

// Per strict rules, this component uses `heading` and `body`.
// The actual social links are hardcoded as they cannot be derived from props.
// The `images` prop could be used for custom icons if the API supported it.

const Social = ({ data }) => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold font-heading text-text-primary mb-3 min-h-[1.5em]">
          {data?.heading || 'Follow Us'}
        </h2>
        <p className="font-body text-text-primary max-w-3xl mx-auto whitespace-pre-line mb-6 min-h-[1.5em]">
          {data?.body || 'Stay up to date with the latest from Swell Kiosks.'}
        </p>
        <div className="flex justify-center space-x-6">
          {/* Placeholder SVGs for social icons */}
          <a href="#" aria-label="Facebook" className="text-text-primary hover:text-primary"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg></a>
          <a href="#" aria-label="Twitter" className="text-text-primary hover:text-primary"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.55v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.5 20.33 8.79c0-.19 0-.38-.01-.57.84-.6 1.56-1.36 2.14-2.22z" /></svg></a>
          <a href="#" aria-label="LinkedIn" className="text-text-primary hover:text-primary"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
        </div>
      </div>
    </section>
  );
};

export default Social;