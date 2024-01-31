import React from 'react'
import "./Price.css"
import ProductInput from "../../components/ProductInput"

function Price({handleChange}) {

  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      {/*<label className="sidebar-label-container">
          <input type="radio" name="test2"/>
          <span className="checkmark"></span>All
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test2"/>
          <span className="checkmark"></span>Rs 0-100

        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test2"/>
          <span className="checkmark"></span>Rs 100-500

        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test2"/>
          <span className="checkmark"></span>Above Rs 500

  </label>*/}
  {/*<ProductInput/>*/}

  <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value="" name="test2"/>
            <span className="checkmark"></span> All

      </label>

      <ProductInput
      handleChange={handleChange}
      value={100}
      title="Rs 0-100"
      name="test2"
      />

<ProductInput
      handleChange={handleChange}
      value={500}
      title="Rs 100-500"
      name="test2"
      />

<ProductInput
      handleChange={handleChange}
      value={2000}
      title="Above Rs 500"
      name="test2"
      />
    </div>
  )
}

export default Price
