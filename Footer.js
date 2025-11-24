import React from "react";

export default function Footer() {
  return (
    <footer className="text-center py-3 bg-white border-top mt-4">
      © {new Date().getFullYear()} JAYJAY — React + Bootstrap
    </footer>
  );
}
