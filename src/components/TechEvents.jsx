import React from "react";
import "bootstrap";
import "./card.css";
import techEventDetailsData from "./techEventDetailsData";
import { Link } from "react-router-dom";

export default function TechEvents() {
  return (
    <div className="techEvent-container">
      <h1 className="heading">tech events</h1>
      <div className="card-container">
        {techEventDetailsData.map((eachItem) => {
          const { eventName, img, heading } = eachItem;
          return (
            <div className="card" key={eventName}>
              <img src={img} alt="img here" />
              <h3>{heading}</h3>
              <Link to={`/${eventName}`}>
                <button>view details</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
