import React from "react";
import { Link } from "react-router-dom";
import { aboutData } from "./data";
import logo from "../../assets/mobile/logo.svg";

const About = () => {
  return (
    <div className="about__container">
      <div className="about__container__content">
        <Link to="/">
          <img src={logo} alt="logo" className="u-ml u-mt" />
        </Link>
        <div className="about__container__content__heading u-ff u-ml u-mt u-fw-bolder">
          <span data-before-content="About_Us" className="u-jam"></span>
        </div>
        <div className="about__container__content__card__container u-ml u-mr">
          {aboutData.map((d) => {
            return (
              <div
                className="about__container__content__card__container__card u-fw-bolder"
                key={Math.random()}
              >
                <div className="about__container__content__card__container__card__image">
                  <img src={d.image} alt="icon" />
                </div>
                <h2 className="about__container__content__card__container__card__heading u-fw-bolder u-ff">
                  {d.heading}
                </h2>
                <p className="about__container__content__card__container__card__paragraph u-fw-medium">
                  {d.paragraph}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
