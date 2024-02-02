import React from 'react';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import ProductInput from '../components/ProductInput';

function Color({ handleChange }) {
  const colors = [
    { value: '', title: 'All' },
    { value: 'black', title: 'Black' },
    { value: 'white', title: 'White' },
    { value: 'yellow', title: 'Yellow' },
    { value: 'blue', title: 'Blue' },
    { value: 'purple', title: 'Purple' },
    { value: 'pink', title: 'Pink' },
  ];

  return (
    <div className="ml">
      <h5 className="sidebar-title color-title">Color</h5>

      <Dropdown onSelect={(selectedKey) => handleChange({ target: { value: selectedKey } })}>
        <Dropdown.Toggle variant="light" id="color-dropdown">
          Select Color
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {colors.map(({ value, title }) => (
            <Dropdown.Item key={value} eventKey={value}>
              {title}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Color;
