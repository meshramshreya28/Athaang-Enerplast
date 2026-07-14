import React from 'react';
import QualityComponent from '../components/Quality';
import Sustainability from '../components/Sustainability';
import CTA from '../components/CTA';

const Quality = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <QualityComponent />
      <Sustainability />
      <CTA />
    </div>
  );
};

export default Quality;
