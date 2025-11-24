import React from "react";
import { Link } from "react-router-dom";
import menu from "../data/menu";

export default function Home() {
  return (
    <div>
      <div className="p-5 bg-white shadow-sm rounded mb-4">
        <h1 className="fw-bold">Welcome to JAYJAY</h1>
        <p>Delicious meals delivered fast to your door.</p>
        <Link to="/menu" className="btn btn-primary btn-lg">Order Now</Link>
      </div>

      <h3>Popular Meals</h3>
      <div className="row g-3 mt-1">
        {menu.slice(0, 3).map(item => (
          <div className="col-md-4" key={item.id}>
            <div className="card">
              <img src={item.img} className="card-img-top" />
              <div className="card-body">
                <h5>{item.name}</h5>
                <p>${item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
