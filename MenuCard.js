import React from "react";
import { useCart } from "../context/CartContext";

export default function MenuCard({ item }) {
  const { addItem } = useCart();

  return (
    <div className="card h-100">
      <img src={item.img} className="card-img-top" alt="" />
      <div className="card-body d-flex flex-column">
        <h5>{item.name}</h5>
        <p className="flex-grow-1">{item.desc}</p>
        <div className="d-flex justify-content-between">
          <strong>${item.price}</strong>
          <button className="btn btn-primary btn-sm" onClick={() => addItem(item)}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
