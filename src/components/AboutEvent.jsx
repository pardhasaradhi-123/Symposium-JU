import React from "react";

export default function AboutEvent() {
  return (
    <React.Fragment>
      <div className="about-container">
        <h2 className="heading">nexodus</h2>
        <div className="source-container">
          <div className="description-container">
            <p className="para">
              NEXODUS Symposium, a vibrant confluence of technology and
              creativity. With a diverse array of both tech and non-tech events,
              it's an open invitation for everyone to participate, learn, and
              grow. Whether you're a tech enthusiast or simply curious, our
              symposium offers a unique opportunity to expand your horizons.
              Engage in thought-provoking discussions, hands-on workshops, and
              innovative challenges. Connect with like-minded individuals, share
              knowledge, and foster new skills. Join us for an enriching
              experience where curiosity knows no bounds, and everyone is
              welcome to explore the exciting world of technology and beyond.
            </p>
          </div>
          <div className="img-container">
            <img src="./images/JU.jpg" alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
