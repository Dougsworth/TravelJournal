import React from "react";
import Travellogo from "../components/Travel-logo.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={Travellogo} alt="travellogo" className="Travel-logo" />
      <h3>Dougy's Travel Journal</h3>
    </div>
  );
}
