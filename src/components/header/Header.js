import React from "react";
import "./style.scss";
function header() {
  return (
    <section className="header-container" data-scroll-section>
      <ul className="header-menu">
        <li>Intro</li>
        <li>About</li>
        <li>Featured</li>
      </ul>
      <h1
        data-scroll
        data-scroll-speed="-1"
        data-scroll-direction="vertical"
        id="header-text"
      >
        Art Objects
      </h1>
    </section>
  );
}

export default header;
