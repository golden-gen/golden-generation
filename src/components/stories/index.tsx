/* eslint-disable @next/next/no-img-element */
import React from "react";

export const Story = () => {
  return (
    <section className="section-stories">
      <video className="bg-video" autoPlay muted loop>
        <source src="/img/video.mp4" type="video/mp4" />
        <source src="/img/video.webm" type="video/webm" />
      </video>
      <div className="center-text n margin-bottom">
        <h2 className="heading-secondary">We make people genuinely happy</h2>
      </div>
      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img
              src="/img/nat-8.jpg"
              alt="person on a toar"
              className="story__img"
            />
            <figcaption className="story__caption">Mary Smith</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary">We make people genuinely happy</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellat, ut nisi. Iusto id libero autem, odit fuga quas aut sint
              unde dolorem consequuntur maiores ratione nisi, omnis eos ex ea.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img
              src="/img/nat-9.jpg"
              alt="person on a toar"
              className="story__img"
            />
            <figcaption className="story__caption">Jokanola Yusuff</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary">We make people genuinely happy</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellat, ut nisi. Iusto id libero autem, odit fuga quas aut sint
              unde dolorem consequuntur maiores ratione nisi, omnis eos ex ea.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
