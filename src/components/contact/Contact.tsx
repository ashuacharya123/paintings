import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/mobile/logo.svg";
import name from "../../assets/mobile/icons/name.svg";
import email from "../../assets/mobile/icons/email.svg";
import message from "../../assets/mobile/icons/message.svg";

import linkIcon from "../../assets/mobile/icons/btn.svg";

const Contact = () => {
  const [unavailable, setUnavailable] = useState<boolean>(false);
  return (
    <div className="contact__container">
      <Link to="/">
        <img src={logo} alt="logo" className="u-ml u-mt" />
      </Link>
      <div className="unavailable" id={unavailable ? "unavailable" : ""}>
        Sorry, this is just a demo
      </div>
      <div className="contact__container__content">
        <div className="contact__container__content__container">
          <div className="contact__container__content__container__heading u-ff u-fw-bolder u-mt">
            <span
              data-before-content="Connect_with_us"
              className="u-jam"
            ></span>
          </div>
          <ul className="contact__container__content__container__contact">
            <li>
              <span className="u-fw-bold">
                <img src={name} alt="name" />
                Name
              </span>
              <input type="text" />
            </li>
            <li>
              <span className="u-fw-bold">
                <img src={email} alt="email" />
                Email
              </span>
              <input type="text" />
            </li>
            <li>
              <span className="u-fw-bold">
                <img src={message} alt="message" />
                Message
              </span>
              <input type="text" />
            </li>
            <button
              className="collection__container__content__card__container__card__button u-btn"
              onClick={() => {
                setUnavailable(true);
                window.setTimeout(() => setUnavailable(false), 1000);
              }}
            >
              <span>Connect</span>
              <img src={linkIcon} alt="" />
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
