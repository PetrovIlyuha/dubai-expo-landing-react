import React from "react";
import Zoom from "react-reveal/Zoom";

import EventAvailableTwoToneIcon from "@material-ui/icons/EventAvailableTwoTone";
import ExploreTwoToneIcon from "@material-ui/icons/ExploreTwoTone";
import PaletteTwoToneIcon from "@material-ui/icons/PaletteTwoTone";
const EventInfo = () => {
  return (
    <div className="bck_cadet_blue">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          <Zoom left duration={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red"></div>
                  <div className="vn_icon">
                    <EventAvailableTwoToneIcon style={{ fontSize: "3.5rem" }} />
                  </div>
                  <div className="vn_title">21 Jan 2020</div>
                  <div className="vn_desc">
                    Climate influencers, change-makers to convene at Expo 2020
                    global event to encourage action on climate change
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom left duration={500} delay={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_yellow"></div>
                  <div className="vn_icon">
                    <ExploreTwoToneIcon style={{ fontSize: "3.5rem" }} />
                  </div>
                  <div className="vn_title">Pavilions</div>
                  <div className="vn_desc">
                    Hundreds of pavilions will feature interactive exhibits,
                    live entertainment, memorable meeting spaces
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom left>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_white"></div>
                  <div className="vn_icon">
                    <PaletteTwoToneIcon
                      style={{ fontSize: "3.5rem", color: "black" }}
                    />
                  </div>
                  <div className="vn_title">Arts and Culture0</div>
                  <div className="vn_desc">
                    From the Al Wasl Opera to a diverse range of installations,
                    artistic creations, workshops and performances,
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
