import React from "react";

const Features = () => {
  return (
    <div className="section-features">
      <div className="center-text margin-bottom">
        <h2 className="heading-secondary">Our features</h2>
      </div>
      <div className="row">
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--1"></div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">
                  The Sea Explorer
                </span>
              </h4>

              <div className="card__detail">
                <ul>
                  <li>3 day tours</li>
                  <li>Up to 30 people</li>
                  <li>2 tour guides</li>
                  <li>Sleep in cozy hotels </li>
                  <li>Difficulty: easy</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1 ">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$299</p>
                </div>
                <a href="#" className="btn btn--white">
                  Book now!
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--2"></div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--2">
                  The Sea Explorer
                </span>
              </h4>

              <div className="card__detail">
                <ul>
                  <li>3 day tours</li>
                  <li>Up to 30 people</li>
                  <li>2 tour guides</li>
                  <li>Sleep in cozy hotels </li>
                  <li>Difficulty: easy</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-2 ">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$299</p>
                </div>
                <a href="#" className="btn btn--white">
                  Book now!
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--3"></div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--3">
                  The Sea Explorer
                </span>
              </h4>

              <div className="card__detail">
                <ul>
                  <li>3 day tours</li>
                  <li>Up to 30 people</li>
                  <li>2 tour guides</li>
                  <li>Sleep in cozy hotels </li>
                  <li>Difficulty: easy</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-3 ">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$299</p>
                </div>
                <a href="#" className="btn btn--white">
                  Book now!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="center-text">
        <a href="" className="btn btn-primary btn-center">
          Discover more
        </a>
      </div>
    </div>
  );
};

export default Features;
