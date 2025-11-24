import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { useParams } from "react-router-dom";

export default function TrackOrder() {
  const { order, setStatus } = useCart();
  const { orderId } = useParams();

  const [status, setLocalStatus] = useState(order?.status);

  useEffect(() => {
    if (!order) return;

    const steps = ["Preparing", "On the Way", "Delivered"];
    let i = 0;

    const timer = setInterval(() => {
      if (i < steps.length) {
        setStatus(steps[i]);
        setLocalStatus(steps[i]);
        i++;
      } else {
        clearInterval(timer);
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [order, setStatus]);

  if (!order)
    return <p>No order found.</p>;

  return (
    <div className="card p-3">
      <h3>Order Tracking — {order.id}</h3>
      <p>Status: <strong>{status}</strong></p>
    </div>
  );
}
