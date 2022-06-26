import React from "react";

export default function Travel(props) {
  return (
    <section className="travel-card">
      <img className="travel-image" src={props.imageUrl} alt="prop.location" />
      <div className="travel-info">
        <h4>{props.location}</h4>
        <a href={props.googleMapsUrl}>View on Google Maps</a>
        <h3>{props.title}</h3>
        <p className="travel-dates">
          {props.startDate} - {props.endDate}
        </p>
        <p>{props.description}</p>
      </div>
    </section>
  );
}
