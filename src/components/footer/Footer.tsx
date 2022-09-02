import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/mobile/logo2.svg";
import arrow from "../../assets/mobile/icons/arrow-right.svg";

const Footer = () => {
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <div className="footer__container">
      <div className="footer__container__content">
        <img src={logo} alt="logo" />
        <p>@copyright 2022 paintings.com</p>
        <ul>
          <Link to="/">
            <span>
              <img src={arrow} alt="" />
            </span>
            <span>Home</span>
          </Link>
          <Link to="/about">
            <span>
              <img src={arrow} alt="" />
            </span>
            <span>About</span>
          </Link>
          <Link to="/collection">
            <span>
              <img src={arrow} alt="" />
            </span>
            <span>Collection</span>
          </Link>
          <Link to="/contact">
            <span>
              <img src={arrow} alt="" />
            </span>
            <span>Contact</span>
          </Link>
        </ul>
      </div>
      <div className="button" onClick={topFunction}>
        <button></button>
      </div>
    </div>
  );
};

export default Footer;
