/* eslint-disable @next/next/no-img-element */
import React from "react";

const LandingPage = () => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img className="header__logo" src="/img/logo-white.png" alt="Logo" />
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Golden Generation</span>
          <span className="heading-primary-sub">The Future is our concern</span>
        </h1>
        <a href="#" className="btn btn-white btn-animation">
          Discover
        </a>
      </div>
    </header>
  );
};

export default LandingPage;
