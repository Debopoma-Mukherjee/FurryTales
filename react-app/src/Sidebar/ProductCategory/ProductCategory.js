import React from 'react'
import "./ProductCategory.css"
import ProductInput from "../../components/ProductInput"
function ProductCategory({handleChange}) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        
      <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value="" name="test"/>
            <span className="checkmark"></span> All

      </label>
      <ProductInput
      handleChange={handleChange}
      value="Leashes"
      title="Leashes"
      name="test"
      />

<ProductInput
      handleChange={handleChange}
      value="Pet Toys"
      title="Pet Toys"
      name="test"
      />

<ProductInput
      handleChange={handleChange}
      value="Pet Food"
      title="Pet Food"
      name="test"
      />

<ProductInput
      handleChange={handleChange}
      value="Pet Clothes"
      title="Pet Clothes"
      name="test"
      />
      </div>
    </div>
  )
}

export default ProductCategory
