import React from 'react';
import AboutBanner from '../components/AboutBanner';
import WhoWeAre from '../components/WhoWeAre';
import AtAGlance from '../components/AtAGlance';
import OurJourney from '../components/OurJourney';
import WhatWeSupply from '../components/WhatWeSupply';
import IndustriesAndWhyChooseUs from '../components/IndustriesAndWhyChooseUs';
import OurSupplyProcess from '../components/OurSupplyProcess';
import VisionMission from '../components/VisionMission';
import OurCoreValues from '../components/OurCoreValues';
import AboutCTA from '../components/AboutCTA';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-body">
      <main>
        <AboutBanner />
        <WhoWeAre />
        <AtAGlance />
        <OurJourney />
        <WhatWeSupply />
        <IndustriesAndWhyChooseUs />
        <OurSupplyProcess />
        <VisionMission />
        <OurCoreValues />
        <AboutCTA />
      </main>
    </div>
  );
};

export default AboutUs;
