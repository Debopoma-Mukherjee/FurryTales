import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import categories from "./CategoriesList";
import './Categories.css';

/*function Categories(props) {

  
  return (
    

    
    <div className="cat-container d-flex justify-content-between"  style={{ backgroundColor: "#D5D8DC" }}>
      <div  className="categoryh">
     All Categories</div>
      <div>
        {categories && categories.length>0 && 
        categories.map((item,index)=>{
          return(
            <span onClick={() => props.handleCategory && props.handleCategory(item)} key={index} className='category'>{item}</span>
          )
        })}
      </div>
      
     

     </div>
  
  )
}

export default Categories;*/


function Categories(props) {
  const { selectedCategory, handleCategory } = props;

  return (
    <div className="cat-container d-flex justify-content-between" style={{ backgroundColor: "#D5D8DC" }}>
      <div className="categoryh"></div>
      <div>
        <span onClick={() => handleCategory(null)} className={`category ${!selectedCategory ? "active" : ""}`}>All Categories</span>
        <span onClick={() => handleCategory('cats')} className={`category ${selectedCategory === 'cats' ? "active" : ""}`}>Cats</span>
        <span onClick={() => handleCategory('dogs')} className={`category ${selectedCategory === 'dogs' ? "active" : ""}`}>Dogs</span>
        <span onClick={() => handleCategory('birds')} className={`category ${selectedCategory === 'birds' ? "active" : ""}`}>Birds</span>
      </div>
    </div>
  );
}

export default Categories;
