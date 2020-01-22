import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

export default class Header extends Component {
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "#021c1e",
          boxShadow: "none",
          padding: "10px 0"
        }}
      >
        <ToolBar>
          <div className="header header_logo">
            <div className="font_righteous header_text_main">
              Dubai Expo 2020
            </div>
            <div className="header_logo_title header_text_sm font_roboto">
              Food. Music. Tech. Culture.
            </div>
          </div>

          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={() => console.log("opened menu")}
          >
            <MenuIcon />
          </IconButton>
        </ToolBar>
      </AppBar>
    );
  }
}
