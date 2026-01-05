import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import TextBlock from '../components/TextBlock.jsx';
import Location from '../components/Location.jsx';
import Testimonials from '../components/Testimonials.jsx';
import ContactForm from '../components/ContactForm.jsx';
import Newsletter from '../components/Newsletter.jsx';
import Social from '../components/Social.jsx';
import Footer from '../components/Footer.jsx';

const JoinTheSwellKioskCrew = () => {
  const pageData = [
    {
      type: "Header",
      heading: "",
      body: "top of page\n\nSkip to Main Content",
      images: [],
    },
    {
      type: "Hero",
      heading: "Join the Swell Kiosk Crew",
      body: "Eat Well. Eat Swell",
      images: [
        "https://static.wixstatic.com/media/906274_8249f1f030d64b0cbe69df062418eb0a~mv2.jpg/v1/fill/w_56,h_6192,fp_0.53_0.48,q_80,enc_avif,quality_auto/Join%20the%20Swell%20Crew.jpg",
      ],
    },
    {
      type: "TextBlock",
      heading: "",
      body: "Love the beach?\n\nThrive on good vibes?\n\nWe’re on the lookout for energetic, friendly legends to join our bustling beachside kiosk.\n\nFrom taking orders with a smile, crafting top-notch coffee, to making fresh tacos — every team member plays a vital role in delivering the great food and feel-good service we’re known for.\n\n​\n\nIf you’re reliable, positive, and ready to bring the energy to a fast-paced, customer-focused environment — we want to hear from you!",
      images: [
        "https://static.wixstatic.com/media/906274_9e86f91ca36c4d8f9387222f9e9529cc~mv2.png",
      ],
    },
    {
      type: "TextBlock",
      heading:
        "No experience?    No stress.   We provide full training and support from day one.",
      body: "Come and find Swell Kiosks Newcastle, where the skies are blue and the chips are golden.",
      images: [
        "https://static.wixstatic.com/media/906274_a57e310c7402434aba1bc7067a23eaec~mv2.jpg/v1/fill/w_147,h_221,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/swell_DSC_7460.jpg",
      ],
    },
    {
      type: "Location",
      heading: "## Bar Beach",
      body: "1 Memorial Drive\n\nBar Beach\n\nNSW 2300",
      images: [
        "https://static.wixstatic.com/media/906274_7234c379d3f54601a946dccdf75e365d~mv2.png/v1/fill/w_60,h_218,al_c,q_85,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/hook-swell-lowres.png",
      ],
    },
    {
      type: "Location",
      heading: "## Nobbys Beach",
      body: "35 Nobbys Rosd\n\nNewcastle East\n\nNSW 2300",
      images: [],
    },
    {
      type: "TextBlock",
      heading: "## Open Daily / 6:30AM - 4PM",
      body: "## weather permitting\n\n## [Leave us a review on google](https://g.page/r/CfZCEYhB_6QxEBM/review)",
      images: [],
    },
    {
      type: "Testimonials",
      heading: "## Happy Customers",
      body: "5/5\n\n> I visited this location on Easter Sunday, 20/4/25 and it was absolutely beautiful. The staff at Swell Kiosk did an excellent job, especially on such a busy day. They were magnificent, the wait time was short, and the food was reasonably priced. I’m a very happy customer.\n\nElly\n\n5/5\n\n> Great place for morning coffee whilst enjoying Bar Beach.\n> \n> Coffee was great also had the BLT\n> \n> Really friendly service!\n\nSebastian\n\n5/5\n\n> Can't beat that view for a morning coffee. I only got a coffee but the muffins and other food looked good as well. And finally, the coffee was hot, strong and tasty. Also a really good place to go if you like panting random dogs\n\nJustin\n\n5/5\n\n> One of the most beautiful coastlines of anywhere in the world. I was up in Newcastle doing a run along the coastline, and a swim at Merewether pool and so it was natural to drop in to the Swell Kiosk for breakfast. Loved the scenery and loved the food.\n\nNeal",
      images: [],
    },
    {
      type: "ContactForm",
      heading: "Contact Swell Kiosks",
      body: "## Fill in some details below or email us\n\nFill out the form below or send your details to [hello@swellkiosks.com.au](mailto:hello@swellkiosks.com.au)\n\nFirst name\n\nLast name\n\nEmail*\n\nPhone\n\nMessage*\n\nSubmit",
      images: [],
    },
    {
      type: "Newsletter",
      heading: "## Never Miss a Thing",
      body: "Keep updated with all our latest news\n\nEmail*\n\nYes, subscribe me to your newsletter.\n\nSubmit",
      images: [],
    },
    {
      type: "Social",
      heading: "## Follow Us",
      body: "## [@swellkiosks_newcastle](https://www.instagram.com/swellkiosks_newcastle)",
      images: [],
    },
    {
      type: "Footer",
      heading: "",
      body: "Close\n\nbottom of page",
      images: [],
    },
  ];

  return (
    <>
      <Header data={pageData[0]} />
      <Hero data={pageData[1]} />
      <TextBlock data={pageData[2]} />
      <TextBlock data={pageData[3]} />
      <Location data={pageData[4]} />
      <Location data={pageData[5]} />
      <TextBlock data={pageData[6]} />
      <Testimonials data={pageData[7]} />
      <ContactForm data={pageData[8]} />
      <Newsletter data={pageData[9]} />
      <Social data={pageData[10]} />
      <Footer data={pageData[11]} />
    </>
  );
};

export default JoinTheSwellKioskCrew;
