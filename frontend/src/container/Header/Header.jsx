import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <h1 className="p__opensans" style={{ margin: "2rem 0" }}>
      Savor the extraordinary at Epicurean Symphony, where every plate tells a story of craftsmanship and flavor. Join us for an unforgettable culinary voyage that celebrates taste, tradition, and innovation.
      </h1>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
