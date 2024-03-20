import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="footer-source-container">
          <div className="footer-details">
            <h2> in associated with</h2>
            <br />
            <img src="./images/cd developrs logo.png" alt="" />
          </div>
          <div className="footer-details">
            <h2>contact us</h2>
            <article>
              <p>
                <span>Student Co-ordinator:</span> <br /> Livin M , B Aishwarya
                & Vishal S S
              </p>
              <br />
              <p>
                <span>Phone: </span>+91 9344616721
              </p>
              <br />
              <p>
                <span>Email:</span> nexodusjeppiaar@gmail.com
              </p>
              <br />

              <a href="https://jeppiaaruniversity.ac.in/">
                https://jeppiaaruniversity.ac.in/
              </a>
            </article>
          </div>
          <div className="footer-details">
            <h2>follow us</h2>
            <div className="icons">
              <a href="https://www.instagram.com/nexodus2k24?igsh=MWI1ZGZzMHp1YnQzNg==">
                <img src="./images/instagram.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="coder-details">
          <p>
            <span>Coded by : </span>M Pardhasaradhi
          </p>
        </div>
      </footer>
    </React.Fragment>
  );
}
