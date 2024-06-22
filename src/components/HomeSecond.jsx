import React from "react";
import "./style.css";

export default function () {
  return (
    <div>
      <div className="home-second-head">
        <p>
          We help local
          <span> enterprenaurs </span>&{" "}
          <div className="line">
            <span className="filled"> Organisations </span>raise funds for
            <span>projects</span>
          </div>
        </p>
      </div>
      <div className="tabs">
        <div className="tab">
          <div className="tab-head">
            <p>local projects & initiatives</p>
            <span>
              <div class="tab-icon">&#x2197;</div>
            </span>
          </div>
          <div className="tab-heading">
            01/ Transperent<div>Funding</div>
          </div>
          <div className="explore-btn">
            <button>Explore</button>
          </div>
        </div>

        <div className="tab2">
            <div className="tab-heading2">
              02/ Inspiration<div> & Impact</div>
            </div>
            <div className="explore-btn2">
              <button>Explore</button>
            </div>

          <div className="tab-head2">
            <p >catalyst for new ideas</p>
            <span>
              <div class="tab-icon2">&#x2197;</div>
            </span>
          </div>
        </div>

        <div className="tab">
          <div className="tab-head">
            <p>democratic descision</p>
            <span>
              <div class="tab-icon">&#x2197;</div>
            </span>
          </div>
          <div className="tab-heading">
            03/ Participation<div> & Involvement</div>
          </div>
          <div className="explore-btn">
            <button>Explore</button>
          </div>
        </div>

      </div>
    </div>
  );
}
