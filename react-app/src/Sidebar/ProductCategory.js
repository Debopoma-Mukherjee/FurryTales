import React from 'react';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import ProductInput from '../components/ProductInput';

function ProductCategory({ handleChange }) {
  const categories = ['All', 'Leashes', 'Pet Toys', 'Pet Food', 'Pet Clothes'];

  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <Dropdown onSelect={(selectedKey) => handleChange({ target: { value: selectedKey } })}>
          <Dropdown.Toggle variant="light" id="category-dropdown">
            Select Category
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {categories.map((category) => (
              <Dropdown.Item key={category} eventKey={category}>
                {category}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        {/* Alternatively, you can use a custom styled dropdown as follows:
        <label className="sidebar-label-container">
          <select onChange={handleChange} className="form-control">
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label> */}
      </div>
    </div>
  );
}

export default ProductCategory;
