import React from 'react';
import ProductsComponent from '../components/Products';
import CTA from '../components/CTA';

const Products = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <ProductsComponent />
      <CTA />
    </div>
  );
};

export default Products;
