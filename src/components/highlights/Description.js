import React from "react";
import Fade from "react-reveal/Fade";

export default function Description() {
  return (
    <Fade delay={200}>
      <div className="center_wrapper">
        <h2>What is Expo 2020 Dubai?</h2>
        <div className="highlight_description">
          Connecting Minds, Creating the Future Our once-in-a-lifetime
          celebration – the largest event ever staged in the Arab world – is set
          to welcome 190 participating countries, and millions of visitors from
          across the globe. Here they will experience warm Emirati hospitality
          at its finest, as well as the UAE’s values of inclusion, tolerance and
          cooperation. Youth are at the heart of our World Expo. That’s why Expo
          2020 aspires to create a meaningful legacy that will benefit
          generations to come, both locally and globally, spanning everything
          from innovations and architecture to friendships and business
          opportunities.
        </div>
      </div>
    </Fade>
  );
}
