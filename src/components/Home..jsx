import React from "react";
// import Footer from "./Footer";
// import Contact from "./Contact";
// import Services from "./Services";
import NavbarOne from "./NavbarOne";
import NavbarTwo from "./NavbarTwo";
import "./style.css"
import HomeSecond from "./HomeSecond";
import Home2 from "./Home2";

function Home() {
  return (
    <>
      {/*<Navbar />*/}
      <div className="home-page">
        <div className="one">
          <NavbarOne />

          {/* <div className="bubble"></div> */}
        </div>
        <Home2/>
      </div>
      <HomeSecond/>
      {/* <Services />
      <Contact />
      <Footer /> */}
    </>
  );
}
export default Home;
