import React from "react";
import Fade from "react-reveal/Fade";

export default function Footer() {
  return (
    <footer className="bg_black_blue">
      <Fade delay="500">
        <div className="font_righteous footer_logo_venue">
          <div className="footer_copyright">
            Expo Dubai &copy; {new Date().getFullYear()} All rights Reserved
          </div>
        </div>
      </Fade>
    </footer>
  );
}
