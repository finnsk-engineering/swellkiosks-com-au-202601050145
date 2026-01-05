import TextBlock from '../components/TextBlock.jsx';

const PrivacyPolicy = () => {
  const sections = [{"type":"TextBlock","heading":"A Legal Disclaimer","body":"The information provided in this policy is general in nature and is intended to outline how Swell Kiosks manages your personal data. It does not constitute legal advice. If you have specific concerns or questions about privacy or data protection, we recommend consulting a qualified legal professional.","images":[]},{"type":"TextBlock","heading":"Introduction","body":"Swell Kiosks (located at Nobbys Beach and Bar Beach, Newcastle NSW) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal information when you interact with our website or services.\n\nBy using our website, you consent to the practices outlined in this policy.","images":[]},{"type":"TextBlock","heading":"Information We Collect","body":"We may collect the following types of information:\n\n- Personal Information: Name, email address, phone number—when you fill out forms, join our mailing list, or contact us.\n\n- Device Information: IP address, browser type, operating system, and website usage data, collected through cookies and analytics tools.\n\n- Location Data: When accessing the site via a mobile device or location-aware browser.","images":[]},{"type":"TextBlock","heading":"How We Collect Information","body":"We collect information in the following ways:\n\n- When you submit a contact form or sign up for updates\n\n- Through cookies, tracking technologies, or analytics (e.g., Google Analytics)\n\n- When you interact with us via social media platforms","images":[]},{"type":"TextBlock","heading":"Why We Collect Your Data","body":"We use your information to:\n\n- Respond to enquiries\n\n- Improve our website performance and user experience\n\n- Send occasional updates about Swell Kiosks, offers, or menu changes (with your consent)\n\n- Meet legal and regulatory obligations","images":[]},{"type":"TextBlock","heading":"Cookies and Analytics","body":"We use cookies to improve functionality and user experience. These cookies may track your browsing behavior on our site. You can disable cookies in your browser settings.\n\nAnalytics services such as Google Analytics may collect anonymised information to help us understand site traffic and usage patterns.","images":[]},{"type":"TextBlock","heading":"Sharing Your Information","body":"We do not sell, rent, or trade your personal information. We may share data with trusted service providers who assist in running our website (e.g., email platforms, analytics providers), under strict confidentiality agreements.\n\nWe may disclose your information if required by law or to protect our legal rights.","images":[]},{"type":"TextBlock","heading":"Data Storage and Security","body":"We take reasonable steps to secure your data, including encrypted communications (HTTPS) and secure third-party services. However, no online system is 100% secure, and we cannot guarantee absolute security.","images":[]},{"type":"TextBlock","heading":"Changes to This Policy","body":"We may update this Privacy Policy from time to time. The latest version will always be available on this page with a revised \"Last Updated\" date.\n\nLast Updated: 30 June 2025","images":[]},{"type":"TextBlock","heading":"Contact Us","body":"For any questions or concerns about this Privacy Policy, please contact:\n\nSwell Kiosks Newcastle\n\n[support@swellkiosks.com.au](mailto:support@swellkiosks.com.au?subject=Swell%20Kiosk%20Website%20Privacy%20Policy%20Enquiry)","images":[]}];

  return (
    <>
      {sections.map((section, index) => {
        switch (section.type) {
          case 'TextBlock':
            return <TextBlock key={index} data={section} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default PrivacyPolicy;
