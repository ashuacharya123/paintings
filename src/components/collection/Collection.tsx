import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/mobile/logo.svg";
import { collectionData } from "./data";
import linkIcon from "../../assets/mobile/icons/btn.svg";

const Collection = () => {
  const [unavailable, setUnavailable] = useState<boolean>(false);
  return (
    <div className="collection__container">
      <div className="collection__container__content">
        <Link to="/">
          <img src={logo} alt="logo" className="u-ml u-mt" />
        </Link>
        <div className="unavailable" id={unavailable ? "unavailable" : ""}>
          Sorry, this is just a demo
        </div>
        <div className="about__container__content__heading u-ff u-ml u-mt">
          <span data-before-content="Collections" className="u-jam"></span>
        </div>
        <div className="collection__container__content__card__container u-ml u-mr">
          {collectionData.map((d) => {
            return (
              <div
                className="collection__container__content__card__container__card u-active"
                key={Math.random()}
              >
                <div className="collection__container__content__card__container__card__content">
                  <div className="collection__container__content__card__container__card__image">
                    <img src={d.image} alt="icon" />
                  </div>
                  <div className="collection__container__content__card__container__card__heading">
                    <p className=" ">{d.heading}</p>
                    <span className=" u-fw-bold">$91</span>
                  </div>
                  <button
                    className="collection__container__content__card__container__card__button u-btn "
                    onClick={() => {
                      setUnavailable(true);
                      window.setTimeout(() => setUnavailable(false), 1000);
                    }}
                  >
                    <span>Choose this one</span>
                    <img src={linkIcon} alt="" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Collection;
