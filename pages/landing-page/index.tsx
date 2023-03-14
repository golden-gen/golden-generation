/* eslint-disable @next/next/no-img-element */
import React from "react";
import AboutUs from "../../src/components/about-us";
import Features from "../../src/components/features";
import GridWithFloat from "../../src/components/grid-with-float";
import Objectives from "../../src/components/objectives";

const LandingPage = () => {
  return (
    <>
      <header className="header">
        <div className="header__logo-box">
          <img className="header__logo" src="/img/logo-white.png" alt="Logo" />
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">Golden Generation</span>
            <span className="heading-primary-sub">
              The Future is our concern
            </span>
          </h1>
          <a href="#" className="btn btn-white btn-animation">
            Discover
          </a>
        </div>
      </header>
      {/* About Us Section */}
      <AboutUs />
      {/* Objectives Section */}
      <Objectives />
      {/* <GridWithFloat /> */}
      {/* features */}
      <Features />
    </>
  );
};

export default LandingPage;
