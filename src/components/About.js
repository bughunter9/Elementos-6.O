import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="upper-part">
        <div className="headin">
          <h1> ABOUT ELEMENTOS 6.O</h1>
        </div>
        <div className="row">
          <div className="col1">
            <img
              className="img1"
              src="https://www.burgerking.in/static/media/home-of-the-whopper.33b5f485.jpg"
              alt=""
            />
          </div>
          <div className="col1">
            <h4>CONTENT</h4>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col2">
          <img
            src="https://www.burgerking.in/static/media/bk-wall-banner-3.4ab48ec9.jpg"
            alt=""
          />
        </div>
        <div className="col2">
          <img
            src="https://www.burgerking.in/static/media/bk-wall-banner-2.e1210188.jpg"
            alt=""
          />
        </div>
        <div className="col2">
          <img
            src="https://www.burgerking.in/static/media/bk-wall-banner-1.a84a9b57.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
