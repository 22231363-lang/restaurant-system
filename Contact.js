import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <div className="card p-3">
      <h3>Contact Us</h3>

      <form
        onSubmit={e => {
          e.preventDefault();
          alert("Message sent!");
        }}
      >
        <input
          className="form-control mb-2"
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="form-control mb-2"
          placeholder="Email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
        />

        <textarea
          className="form-control mb-2"
          placeholder="Message"
          rows={4}
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
        />

        <button className="btn btn-primary">Send</button>
      </form>
    </div>
  );
}
