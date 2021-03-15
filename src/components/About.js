import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="upper-part">
        <div className="headin">
          <h1> About Elementos 6.O</h1>
        </div>
        <div className="row2">
          <div className="col1a">
            <img
              className="img1"
              src="https://www.burgerking.in/static/media/home-of-the-whopper.33b5f485.jpg"
              alt=""
            />
          </div>
          <div className="col1b">
                <h4>
                Proudly continuing the tradition of organising the Biggest Technical Fest in
                Thapar for over the past 5 years, IETE is back with another version upgrade: 
                Elementos 6.O. A week-long series of fun-filled and brainstorming events, 
                which are open for all the students in and across Thapar. Come in and Enjoy
                the intense events and staying productive at your best energy levels. 
                Experience the unravelling of the big surprises ‼️
                </h4>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col2a">
          <img
            src="https://www.burgerking.in/static/media/bk-wall-banner-3.4ab48ec9.jpg"
            alt=""
          />
        </div>
        <div className="col2b">
          <img
            src="https://www.burgerking.in/static/media/bk-wall-banner-2.e1210188.jpg"
            alt=""
          />
        </div>
        <div className="col2c">
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
