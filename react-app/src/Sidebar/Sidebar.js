import React from 'react'
import './Sidebar.css'
import ProductCategory from './ProductCategory/ProductCategory'
import Price from './Price/Price'
import Color from './Color/Color'
 function Sidebar({handleChange}) {
    
  return (
    <>
    <section className="sidebar">
        <div className="logo-container">
            <h1>🛒</h1>
        </div>
        <ProductCategory handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Color handleChange={handleChange}/>
    </section>
    </>

  )
}
export default Sidebar;