import React from 'react';
import TextBlock from '../components/TextBlock.jsx';

const AccessibilityStatement = () => {
  const sections = [{"type":"TextBlock","heading":"","body":"Skip to Main Content","images":[]},{"type":"TextBlock","heading":"Accessibility Statement","body":"This statement was last updated on 30 June 2025.\n\nSwell Kiosks is committed to making our website accessible to everyone, including people with disabilities. We aim to provide a user-friendly experience for all visitors by using clear content, easy navigation, and mobile-friendly design.\n\n​\n\nIf you experience any difficulty accessing any part of our site or have suggestions for improvement, please contact us at \\[insert your email address\\]. We’re here to help and always working to improve.","images":[]},{"type":"TextBlock","heading":"","body":"Close","images":[]}];

  return (
    <>
      <TextBlock data={sections[0]} />
      <TextBlock data={sections[1]} />
      <TextBlock data={sections[2]} />
    </>
  );
};

export default AccessibilityStatement;