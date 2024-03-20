import React from "react";
import { Link } from "react-router-dom";
import nonTecheventDetailsData from "./nonTecheventDetailsData";

export default function NonTechEvents() {
  return (
    <React.Fragment>
      <div className="techEvent-container">
        <h1 className="heading">non tech events</h1>
        <div className="card-container">
          {nonTecheventDetailsData.map((eachItem) => {
            const { eventName, img, heading } = eachItem;
            return (
              <article className="card" key={eventName}>
                <img src={img} alt="" />
                <h3>{heading}</h3>
                <Link to={`/${eventName}`}>
                  <button className="pushable">
                    <span className="shadow"></span>
                    <span className="edge"></span>
                    <span className="front">view details</span>
                  </button>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}
