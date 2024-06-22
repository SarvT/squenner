import React from "react";
import "./style.css";

function NavbarOne() {
  return (
    <>
      <div>
        <nav className="nav-one">
          <div className="login-btn">
            <div className="button">Login</div>
            <div className="button">Signup</div>
          </div>
          <div className="nav-social">
            <span className="icon">
              <i className="fa-brands fa-twitter fa-2xl"></i>
            </span>
            <span className="icon">
              <i className="fa-brands fa-instagram fa-2xl"></i>
            </span>
            <span className="icon">
              <i className="fa-brands fa-whatsapp fa-2xl"></i>
            </span>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavbarOne;
