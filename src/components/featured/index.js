import React from "react";
import Carousel from "./Carousel";
export default function Featured() {
  return (
    <div style={{ position: "relative" }}>
      <Carousel />
      <div className="artist_name">
        <div className="wrapper">
          <p className="font_roboto">Dubai Expo</p>
        </div>
      </div>
    </div>
  );
}
