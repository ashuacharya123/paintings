import React from "react";
import { Link } from "react-router-dom";
import home from "../../assets/mobile/icons/home.svg";
import about from "../../assets/mobile/icons/about.svg";
import collection from "../../assets/mobile/icons/collection.svg";
import contact from "../../assets/mobile/icons/contact.svg";

const Menu = () => {
  return (
    <div className="menu__container">
      <div className="menu__container__content">
        <div className="menu__container__content__logo"></div>
        <ul className="menu__container__content__links u-ttu">
          <Link to="/">
            <span>
              <img src={home} alt="" />
            </span>
            <span>Home</span>
          </Link>
          <Link to="/about">
            <span>
              <img src={about} alt="" />
            </span>
            <span>About</span>
          </Link>
          <Link to="/collection">
            <span>
              <img src={collection} alt="" />
            </span>
            <span>Collection</span>
          </Link>
          <Link to="/contact">
            <span>
              <img src={contact} alt="" />
            </span>
            <span>Contact</span>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
