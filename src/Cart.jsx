import React from "react";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <>
      <div className="cart__div">
        <div className="cart__table">
          <table>
            <thead>
              <tr className="cart_tr">
                <th>Product</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <br />
            <tbody>
              <tr>
                <td>
                  <img
                    src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    alt=""
                  />
                </td>
                <td className="name">
                  Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptop
                </td>
                <td>$100</td>
                <td>1</td>
                <td className="cross">
                  <span>x</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    alt=""
                  />
                </td>
                <td className="name">
                  Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptop
                </td>
                <td>$100</td>
                <td>1</td>
                <td className="cross">
                  <span>x</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="total">
        <div>sub-total: $200</div>
        <div>total: $200</div>
        <Link to="/" className="go__back">
          <span> go back </span>
        </Link>
      </div>
    </>
  );
}

export default Cart;
