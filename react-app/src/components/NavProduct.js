import React from "react";
import "./NavProduct.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

function NavProduct() {
  return (
    <nav>
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>

        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>

        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
}

export default NavProduct;
