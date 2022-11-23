import React from "react";
import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";

function CartBtn() {
  return (
    <div className="cart__box">
      <span>3</span>
      <div>
        <Link to="/cart">
          <FaOpencart className="icon" />
        </Link>
      </div>
    </div>
  );
}

export default CartBtn;
