import React from "react";
import { aboutData } from "./data";
import logo from "../../assets/mobile/logo.svg";

const About = () => {
  return (
    <div className="about__container">
      <div className="about__container__content">
        <img
          src={logo}
          alt="logo"
          className="u-ml about__container__content__logo"
        />
        <div className="about__container__content__card__container">
          <div className="about__container__content__card__container__card">
            {aboutData.map((d) => {
              return (
                <div key={Math.random()}>
                  <div className="about__container__content__card__container__card__image">
                    <img src={d.image} alt="icon" />
                  </div>
                  <h2 className="about__container__content__card__container__card__heading u-ff">
                    {d.heading}
                  </h2>
                  <p className="about__container__content__card__container__card__paragraph">
                    {d.paragraph}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
