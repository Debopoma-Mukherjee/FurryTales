import React from 'react';
import ProductCategory from './ProductCategory';
import Price from './Price';
import Color from './Color';

function Sidebar({ handleChange }) {
  return (
    <section className="sidebar bg-light position-fixed d-flex flex-column ">
      <div className="p-4">

        <ProductCategory handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Color handleChange={handleChange} />
      </div>
    </section>
  );
}

export default Sidebar;
