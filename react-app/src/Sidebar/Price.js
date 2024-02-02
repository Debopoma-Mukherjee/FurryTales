import React from 'react';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import ProductInput from '../components/ProductInput';

function Price({ handleChange }) {
  const priceRanges = [
    { value: '', title: 'All' },
    { value: 100, title: 'Rs 0-100' },
    { value: 500, title: 'Rs 100-500' },
    { value: 2000, title: 'Above Rs 500' },
  ];

  return (
    <div className="ml">
      <h5 className="sidebar-title price-title">Price</h5>

      <Dropdown onSelect={(selectedKey) => handleChange({ target: { value: selectedKey } })}>
        <Dropdown.Toggle variant="light" id="price-dropdown">
          Select Price Range
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {priceRanges.map(({ value, title }) => (
            <Dropdown.Item key={value} eventKey={value}>
              {title}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Price;
