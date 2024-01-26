import React from 'react'
import Header from "./Header";
import { useNavigate ,Link} from 'react-router-dom';
const Product = () => {
  return (
    <div>
    <Header />
    <Link to="/add-product" >ADD PRODUCT </Link>
    </div>
  )
}

export default Product

