import { Link, useNavigate } from "react-router-dom";
import React from "react";
import categories from "./CategoriesList";
import './Categories.css';

function Categories(props) {

  
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

export default Categories;