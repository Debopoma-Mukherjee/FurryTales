import {React,useState} from 'react'
import Header from "./Header";
import NavProduct from "./NavProduct";
import ProductsMain from "../Products/ProductsMain";
import Recommended from "../Recommended/Recommended";
import Sidebar from "../Sidebar/Sidebar";
import ProductCard from "../components/ProductCard";
import products from "../db/Productdata";


import { useNavigate ,Link} from 'react-router-dom';
const Product = () => {
  const[selectedCategory,setSelectedCategory ]=useState(null)


  const handleChange=(event)=> {
    setSelectedCategory(event.target.value)
  }

  const handleClick=event=> {
    setSelectedCategory(event.target.value)
  }

  function filteredData(products,selected){
  let filteredProducts=products

  if(selected)
  {
    filteredProducts=filteredProducts.filter(({category,newPrice,color,company,title}) => category===selected || color===selected 
    || newPrice===selected || company===selected || title===selected );
  }
  return filteredProducts.map(({img,title,star,reviews,prevPrice,newPrice})=>(
    <ProductCard 
    key={Math.random()} 
    img={img}
    title={title}
    star={star}
    reviews={reviews}
    prevPrice={prevPrice}
    newPrice={newPrice}
    />
  ))
  }

  const result=filteredData(products,selectedCategory)

  return (
    <div>
    <Header />
    <Sidebar handleChange={handleChange}/>
    <NavProduct />
    <Recommended handleClick={handleClick}/>
    <ProductsMain result={result} />
    
    </div>
  )
}

export default Product;

