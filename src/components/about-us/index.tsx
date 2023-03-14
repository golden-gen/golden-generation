/* eslint-disable @next/next/no-img-element */
import React from "react";

const AboutUs = () => {
  return (
    <section className="section-about">
      <div className="grid">
        <div className="row">
          <div className="center-text margin-bottom">
            <h2 className="heading-secondary">
              Exciting Tours for Adventurous people
            </h2>
          </div>

          <div className="col-1-of-2 margin-bottom-medium">
            <h3 className="heading-tertiary margin-bottom-small">
              You to fall in love with nature
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              adipisci praesentium cumque, commodi harum facilis quaerat libero
              rem sunt veniam quisquam consequatur eum. Molestias ullam optio
              perferendis in, ut expedita.
            </p>
            <h3 className="heading-tertiary margin-bottom-small">
              Live Adventurous like you never have before
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              adipisci praesentium cumque, commodi harum facilis quaerat libero
              rem sunt veniam quisquam consequatur eum. Molestias ullam optio
              perferendis in, ut expedita.
            </p>
            <a href="" className="btn-text">
              Learn more &rarr;
            </a>
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img
                className="composition__photo composition__photo--p1"
                src="/img/nat-1-large.jpg"
                alt=""
              />
              <img
                className="composition__photo composition__photo--p2"
                src="/img/nat-2-large.jpg"
                alt=""
              />
              <img
                className="composition__photo composition__photo--p3"
                src="/img/nat-3-large.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-1-of-3">col-1-of-3</div>
          <div className="col-1-of-3">col-1-of-3</div>
          <div className="col-1-of-3">col-1-of-3</div>
        </div>
        <div className="row">
          <div className="col-1-of-3">col-1-of-3</div>
          <div className="col-2-of-3">col-2-of-3</div>
        </div>
        <div className="row">
          <div className="col-1-of-4">col-1-of-4</div>
          <div className="col-1-of-4">col-1-of-4</div>
          <div className="col-1-of-4">col-1-of-4</div>
          <div className="col-1-of-4">col-1-of-4</div>
        </div>
        <div className="row">
          <div className="col-1-of-4">col-1-of-4</div>
          <div className="col-1-of-4">col-1-of-4</div>
          <div className="col-2-of-4">col-2-of-4</div>
        </div>
        <div className="row">
          <div className="col-1-of-4">col-1-of-4</div>
          <div className="col-3-of-4">col-3-of-4</div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutUs;
