import React, { useState } from "react";
import menu from "../data/menu";
import MenuCard from "../components/MenuCard";

export default function Menu() {
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(menu.map(m => m.category))];

  const filtered =
    category === "All" ? menu : menu.filter(m => m.category === category);

  return (
    <div>
      <div className="d-flex justify-content-between mb-3">
        <h2>Menu</h2>
        <select
          className="form-select w-auto"
          onChange={e => setCategory(e.target.value)}
        >
          {categories.map(c => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="row g-3">
        {filtered.map(item => (
          <div className="col-md-4" key={item.id}>
            <MenuCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
