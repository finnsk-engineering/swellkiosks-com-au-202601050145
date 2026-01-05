import Hero from '../components/Hero.jsx';
import CallToAction from '../components/CallToAction.jsx';
import Gallery from '../components/Gallery.jsx';
import TextBlock from '../components/TextBlock.jsx';
import Testimonials from '../components/Testimonials.jsx';
import ImageBlock from '../components/ImageBlock.jsx';
import Location from '../components/Location.jsx';
import Social from '../components/Social.jsx';
import Newsletter from '../components/Newsletter.jsx';

const Home = () => {
  const sections = [{"type":"Hero","heading":"Swell-being","body":"Skip to Main Content\n\nEat Well. Eat Swell\n\n## Welcome to Swell Kiosks Bar Beach & Nobbys Beach\n\nServing up brilliant coffee, delicious burgers,  fresh seasonal food & the best views in Newcastle daily!\n\n[Bar Beach Orders](https://bopple.app/swell-bar-beach/)\n\n[Nobbys Orders](https://bopple.app/swell-nobbys/)","images":["https://static.wixstatic.com/media/906274_5b2209a922e24fd89828239d745066e6~mv2.jpg/v1/fill/w_40,h_2166,al_c,q_80,enc_avif,quality_auto/906274_5b2209a922e24fd89828239d745066e6~mv2.jpg"]},{"type":"CallToAction","heading":"Sick of waiting in line?","body":"Skip the queue and order here!\n\n[![Get it on Google Play](https://static.wixstatic.com/media/c837a6_276d32f0ae154e05ba1ca3106443840c~mv2.png)](https://play.google.com/store/apps/details?id=me.boppl&hl=en_AU&pli=1)\n\n[![Download on the App Store](https://static.wixstatic.com/media/c837a6_9efe5b2d45e84b2188b8210f2e93f643~mv2.png)](https://apps.apple.com/au/app/bopple-order-local-takeaway/id641698016)\n\n[RSVP](https://www.swellkiosks.com.au/)","images":["https://static.wixstatic.com/media/906274_eacfc7538f994afc9b40d432cb094326~mv2.png"]},{"type":"Gallery","heading":"","body":"We only source sustainable seafood. Good food done well.","images":["https://static.wixstatic.com/media/906274_885cfc97a8ca4ed78663dc97d4a50277~mv2.jpg/v1/fill/w_37,h_3726,fp_0.08_0.36,q_80,enc_avif,quality_auto/SWELL_2.jpg","https://static.wixstatic.com/media/906274_d2a0cbf5bf5541f4a070e44f168e328d~mv2.jpg/v1/fill/w_37,h_3726,fp_0.59_0.19,q_80,enc_avif,quality_auto/SWELL_3.jpg"]},{"type":"TextBlock","heading":"","body":"We choose our seafood thoughtfully, selecting suppliers that have been line-caught or sourced with care for the marine environment. Our menu features locally sourced ingredients, and all of our condiments are made in-house to reduce waste and support sustainability at every level. Even the smallest action can have a massive impact.","images":["https://static.wixstatic.com/media/906274_9e86f91ca36c4d8f9387222f9e9529cc~mv2.png"]},{"type":"Testimonials","heading":"Happy Customers","body":"## [Leave us a review on google](https://g.page/r/CfZCEYhB_6QxEBM/review)\n\n5/5\n\n> I visited this location on Easter Sunday, 20/4/25 and it was absolutely beautiful. The staff at Swell Kiosk did an excellent job, especially on such a busy day. They were magnificent, the wait time was short, and the food was reasonably priced. I’m a very happy customer.\n\nElly\n\n5/5\n\n> Great place for morning coffee whilst enjoying Bar Beach.\n> \n> Coffee was great also had the BLT\n> \n> Really friendly service!\n\nSebastian\n\n5/5\n\n> Can't beat that view for a morning coffee. I only got a coffee but the muffins and other food looked good as well. And finally, the coffee was hot, strong and tasty. Also a really good place to go if you like panting random dogs\n\nJustin\n\n5/5\n\n> One of the most beautiful coastlines of anywhere in the world. I was up in Newcastle doing a run along the coastline, and a swim at Merewether pool and so it was natural to drop in to the Swell Kiosk for breakfast. Loved the scenery and loved the food.\n\nNeal","images":[]},{"type":"ImageBlock","heading":"","body":"Come and find Swell Kiosks Newcastle, where the skies are blue and the chips are golden.","images":["https://static.wixstatic.com/media/906274_a57e310c7402434aba1bc7067a23eaec~mv2.jpg/v1/fill/w_1200,h_563,fp_0.46_0.51,q_85,enc_avif,quality_auto/swell_DSC_7460.jpg"]},{"type":"Location","heading":"Bar Beach","body":"1 Memorial Drive\n\nBar Beach\n\nNSW 2300","images":["https://static.wixstatic.com/media/906274_7234c379d3f54601a946dccdf75e365d~mv2.png/v1/fill/w_40,h_145,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/hook-swell-lowres.png"]},{"type":"Location","heading":"Nobbys Beach","body":"35 Nobbys Rosd\n\nNewcastle East\n\nNSW 2300","images":[]},{"type":"TextBlock","heading":"Open Daily / 6:30AM - 4PM","body":"## weather permitting","images":[]},{"type":"Social","heading":"Follow Us","body":"## [@swellkiosks_newcastle](https://www.instagram.com/swellkiosks_newcastle)","images":[]},{"type":"Newsletter","heading":"Never Miss a Thing","body":"Keep updated with all our latest news\n\nEmail*\n\nYes, subscribe me to your newsletter.\n\nSubmit\n\nClose","images":[]}];

  const componentMap = {
    Hero,
    CallToAction,
    Gallery,
    TextBlock,
    Testimonials,
    ImageBlock,
    Location,
    Social,
    Newsletter
  };

  return (
    <>
      {sections.map((section, index) => {
        const Component = componentMap[section.type];
        return Component ? <Component key={index} data={section} /> : null;
      })}
    </>
  );
};

export default Home;
