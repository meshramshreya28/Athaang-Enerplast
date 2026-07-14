import React from 'react';
import AboutBanner from '../components/AboutBanner';
import About from '../components/About';
import OurJourney from '../components/OurJourney';
import MissionVision from '../components/MissionVision';
import WhyChooseUs from '../components/WhyChooseUs';
import SupplyNetwork from '../components/SupplyNetwork';
import Quality from '../components/Quality';
import CTA from '../components/CTA';

const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen">
      <AboutBanner />
      <About />
      <OurJourney />
      <MissionVision />
      <WhyChooseUs />
      <SupplyNetwork />
      <Quality />
      <CTA />
    </div>
  );
};

export default AboutUs;
