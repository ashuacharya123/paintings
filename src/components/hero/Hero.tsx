import React from "react";
import { Link } from "react-router-dom";
import { imageData, imageData2 } from "./data";
import linkIcon from "../../assets/mobile/icons/btn.svg";
import smallLogo from "../../assets/mobile/logo.svg";

const Hero = () => {
  return (
    <div className="hero__container">
      <div className="hero__container__content">
        <div className="hero__container__content__upper ">
          <div className="hero__container__content__upper__up">
            <img src={smallLogo} alt="logo" className="u-ml" />
            <h1 className="hero__container__content__upper__up__heading u-ff u-ml u-mr">
              <span data-before-content="Jam" className="u-jam"></span> your
              walls with some creative paintings
            </h1>
            <p className="hero__container__content__upper__up__paragraph u-fw-bold u-ml u-mr">
              Your favorite painting delivered at your doorstep
            </p>
            <div className="hero__container__content__upper__up__images u-lsn">
              {imageData.map((data) => {
                return (
                  <li key={Math.random() * data.length}>
                    <Link to="/collection">
                      <img src={data} alt="images" />
                    </Link>
                  </li>
                );
              })}
            </div>
          </div>
          <div className="hero__container__content__upper__low">
            <div className="hero__container__content__upper__low__images u-lsn">
              {imageData2.map((data) => {
                return (
                  <li key={Math.random() * data.length}>
                    <Link to="/collection">
                      <img src={data} alt="images" />
                    </Link>
                  </li>
                );
              })}
            </div>
          </div>
        </div>
        <div className="hero__container__content__lower u-ml">
          <p className="hero__container__content__lower__paragraph">
            With way many options to choose from,
          </p>
          <Link to="/collection">
            {" "}
            <button className="hero__container__content__lower__btn u-btn">
              <span>Choose one</span>
              <img src={linkIcon} alt="" />
            </button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
