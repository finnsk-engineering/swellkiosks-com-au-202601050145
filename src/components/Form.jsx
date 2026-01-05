import React from 'react';

// This is a generic Form component that acts as a wrapper.
// It can be used for various form types by passing specific fields as children.
// For this task, it will render the more specific ContactForm as an example.
// This approach promotes composition over configuration.

import ContactForm from './ContactForm'; // Assuming ContactForm is in the same directory

const Form = ({ data }) => {
  // A generic Form component could decide which specific form to render
  // based on a prop, or it could simply wrap a more specific implementation.
  // Here, we'll just render the ContactForm with the passed data.

  return (
    <ContactForm data={data} />
  );
};

export default Form;