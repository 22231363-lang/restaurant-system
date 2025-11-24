import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { items, removeItem, updateQty, placeOrder } = useCart();
  const navigate = useNavigate();

  const subtotal = items.reduce((s, item) => s + item.qty * item.price, 0);

  function checkout() {
    placeOrder();
    navigate("/track/latest");
  }

  return (
    <div>
      <h2>Your Cart</h2>

      {items.length === 0 ? <p>Your cart is empty.</p> : null}

      {items.map(item => (
        <div className="card mb-2 p-2" key={item.id}>
          <div className="d-flex align-items-center">
            <img src={item.img} alt="" width="80" height="60" />
            <div className="ms-3 flex-grow-1">
              <h6>{item.name}</h6>
              <small>${item.price}</small>
            </div>

            <input
              type="number"
              min="1"
              value={item.qty}
              className="form-control w-25"
              onChange={e => updateQty(item.id, Number(e.target.value))}
            />

            <button
              className="btn btn-danger btn-sm ms-3"
              onClick={() => removeItem(item.id)}
            >
              X
            </button>
          </div>
        </div>
      ))}

      {items.length > 0 && (
        <div className="mt-3">
          <h5>Total: ${subtotal}</h5>
          <button className="btn btn-primary" onClick={checkout}>
            Place Order
          </button>
        </div>
      )}
    </div>
  );
}
