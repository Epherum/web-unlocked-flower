import React from "react";
import "./style.scss";
import photos from "../../data";
function Featured() {
  const [firstUrl, secondUrl] = photos;
  return (
    <section className="featured-section" data-scroll-section>
      <div
        data-scroll
        data-scroll-speed="1"
        data-scroll-direction="vertical"
        className="featured-row-layout"
      >
        <h6>green</h6>
        <img data-scroll src={firstUrl} alt="" />
      </div>
      <div className="featured-column-layout">
        <h6>lily</h6>
        <img data-scroll src={secondUrl} alt="" />
      </div>
    </section>
  );
}

export default Featured;
