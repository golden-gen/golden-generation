/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import AboutUs from "../../src/components/about-us";
import Features from "../../src/components/features";
import GridWithFloat from "../../src/components/grid-with-float";
import Objectives from "../../src/components/objectives";
import { Story } from "../../src/components/stories";

const LandingPage = () => {
  return (
    <main>
      <header className="header">
        <div className="header__logo-box">
          <img className="header__logo" src="/img/golden-logo.png" alt="Logo" />
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">Golden Generation</span>
            <span className="heading-primary-sub ">
              The Future is our concern
            </span>
          </h1>
          <div className="d-flex gap-3 w-100 justify-content-center">
            <Link href="/student">
              <a className="btn btn-white btn-animation">
                Student Registration
              </a>
            </Link>
            <Link href="/school">
              <a className="btn btn-white btn-animation">School Registration</a>
            </Link>
          </div>
        </div>
      </header>
      {/* About Us Section */}
      <AboutUs />
      {/* Objectives Section */}
      <Objectives />
      {/* <GridWithFloat /> */}
      {/* features */}
      <Features />
      {/* Story section */}
      <Story />
    </main>
  );
};

export default LandingPage;
