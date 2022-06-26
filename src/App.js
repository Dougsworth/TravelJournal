import React from "react";
import Navbar from "./components/Navbar";
import Travel from "./components/Travel";
import data from "./data";

export default function App() {
  //ensure your returning the constant in return statement
  const Tdata = data.map((data) => {
    return (
      <Travel
        title={data.title}
        location={data.location}
        googleMapsUrl={data.googleMapsUrl}
        startDate={data.startDate}
        endDate={data.endDate}
        imageUrl={data.imageUrl}
        description={data.description}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <section className="cards-list">{Tdata}</section>
    </div>
  );
}
