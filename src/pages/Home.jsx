import React from 'react';
import Hero from '../components/Hero';
import Industries from '../components/Industries';
import About from '../components/About';
import Products from '../components/Products';
import WhyChooseUs from '../components/WhyChooseUs';
import Quality from '../components/Quality';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Products />
      <Industries />
      <WhyChooseUs />
      <Quality />
      <CTA />
    </div>
  );
};

export default Home;
