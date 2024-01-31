import React from 'react'
import "./Recommended.css"
import ProductButtons from '../components/ProductButtons'

function Recommended({handleClick}) {
  return (
    <>
      <div>
        <h2 className="recommended-title">
        Recommended
        </h2>
        <div className="recommended-flex">
           <ProductButtons onClickHandler={handleClick} value="" title="All"/>
            <ProductButtons onClickHandler={handleClick} value="Bonkers" title="Bonkers"/>
            <ProductButtons onClickHandler={handleClick} value="Blitz" title="Blitz"/>
            <ProductButtons onClickHandler={handleClick} value="Pedigree" title="Pedigree"/>
            <ProductButtons onClickHandler={handleClick} value="Eimeli" title="Eimeli"/>
        </div>
      </div>
    </>
  )
}

export default Recommended
