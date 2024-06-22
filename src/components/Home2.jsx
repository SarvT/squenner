import React from 'react'
import "./style.css";
import NavbarTwo from './NavbarTwo';

export default function Home2() {
  return (
    <div>
      <div className="two">
          <NavbarTwo />
          <div className="heading-main">
            <div className="head-one">
              <span>Create</span>
              <span>Finance</span>
              <br />
            </div>
            <div className="head-two">
              <span>Develop</span>
              <span>Together</span>
            </div>
            <div className="heading-sub">
              <p>Crowdfunding platform for and enterprenaurs.<p className="fas fa-arrow-right"></p></p>
              <p><p className="fas fa-arrow-down"></p> Support / Funding initiatives.</p>
              <p>& Global Impact. 
                <div className="fas fa-arrow-up"></div>
                </p>
            </div>
            <div className="extra-btns">
              <button className="join-us">Join Us Now</button>
              <p className="read-more">Read more</p>
            </div>
            <div className="head-aud">
                <div className="aud-icons">
                <i class="fa-regular fa-user"></i>
                <i class="fa-regular fa-user"></i>
                <i class="fa-regular fa-user"></i>
                </div>
                <p>Collaboration can change the world //</p>
            </div>
          </div>
        </div>
    </div>
  )
}
