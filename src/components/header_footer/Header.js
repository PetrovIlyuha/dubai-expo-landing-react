import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import SideDrawer from "./SideDrawer";

export default class Header extends Component {
  state = {
    drawerOpen: false,
    headerShow: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  toggleDrawer = value => {
    this.setState({ drawerOpen: value });
  };

  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({
        headerShow: true
      });
    } else {
      this.setState({
        headerShow: false
      });
    }
  };

  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: this.state.headerShow ? "#021c1e" : "transparent",
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
            onClick={() => this.toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <SideDrawer
            open={this.state.drawerOpen}
            onClose={value => this.toggleDrawer(value)}
          />
        </ToolBar>
      </AppBar>
    );
  }
}
