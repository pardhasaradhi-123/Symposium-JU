import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import EventDetailsData from "./eventDetailsData";
import "./eventDetails.css";

export default function EventDetails() {
  const { eventName } = useParams();

  const detailsData = EventDetailsData.find(
    (eachEvent) => eachEvent.eventName === eventName
  );

  const {
    img,
    heading,
    description,
    round1,
    round2,
    rule1,
    rule2,
    rule3,
    rule4,
    rule5,
    rule6,
    rule7,
    rule8,
    rule9,

    staffCoordinator,
    StudentCoordinator,
    registrationCoordinator,
    Certificatecoordinator,
    Othercoordinator,
    eventTime,
    EntryFee,
    PlannedVenue,
    FirstPrize,
    SecondPrize,
    ParticipationPrize,
    regustrationURL,
  } = detailsData;

  return (
    <React.Fragment>
      <div className="eventDetails-container">
        <div className="eventDetails-source-container">
          <div className="img-container">
            <img src={img} alt="" />
          </div>
          <h1 className="heading">{heading}</h1>
          <p className="para">{description}</p>
          <p>{round1}</p>
          <p>{round2}</p>
          <div className="rules">
            <h2>rules :</h2>
            <ul>
              <li>{rule1}</li>
              <li>{rule2}</li>
              <li>{rule3}</li>
              <li> {rule4} </li>
              <li> {rule5} </li>
              <li>{rule6} </li>
              <li> {rule7}</li>
              <li>{rule8}</li>
              <li>{rule9}</li>
            </ul>
          </div>
          <article className="details">
            <div className="container">
              <h2>Entry Fee :</h2>
              <p>{EntryFee}</p>
            </div>
            <div className="container">
              <h2>event Time :</h2>
              <p>{eventTime}</p>
            </div>
            <div className="container">
              <h2>venue :</h2>
              <p>{PlannedVenue}</p>
            </div>
            <div className="container">
              <h2>Participation Prize :</h2>
              <p>{ParticipationPrize}</p>
            </div>
            <div className="container">
              <h2>staff Co-ordinators :</h2>
              <p>{staffCoordinator}</p>
            </div>
            <div className="container">
              <h2>Student Co-ordinators :</h2>
              <p> {StudentCoordinator} </p>
            </div>
            <div className="container">
              <h2>registration Co-ordinator :</h2>
              <p>{registrationCoordinator}</p>
            </div>
            <div className="container">
              <h2>certificate co-ordinator :</h2>
              <p>{Certificatecoordinator}</p>
            </div>
            <div className="container">
              <h2>Other co-ordinators :</h2>
              <p>{Othercoordinator}</p>
            </div>
          </article>
          <div className="btn-container">
            <div className="btn">
              <a href={regustrationURL}>
                <button className="pushable">
                  <span className="shadow"></span>
                  <span className="edge"></span>
                  <span className="front">register here</span>
                </button>
              </a>
              <Link to="/">
                <button className="pushable">
                  <span className="shadow"></span>
                  <span className="edge"></span>
                  <span className="front">back to home</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
