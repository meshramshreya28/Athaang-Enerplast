import React from 'react';
import AllProducts from '../components/AllProducts';
import CTA from '../components/CTA';

const Products = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <AllProducts />
      <CTA />
    </div>
  );
};

export default Products;
