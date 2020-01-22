import React from "react";
import Carousel from "./Carousel";
import CountDown from "./CountDown";
export default function Featured() {
  return (
    <div style={{ position: "relative" }}>
      <Carousel />
      <div className="artist_name">
        <div className="wrapper">
          <p className="font_righteous">Dubai Expo</p>
        </div>
      </div>
      <CountDown />
    </div>
  );
}
