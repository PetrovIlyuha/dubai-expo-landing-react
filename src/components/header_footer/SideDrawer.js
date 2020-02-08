import React from "react";
import { scroller } from "react-scroll";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const SideDrawer = ({ open, onClose }) => {
  const scrollToSection = element => {
    scroller.scrollTo(element, {
      duration: 1150,
      delay: 150,
      smooth: true,
      offset: -130
    });
    onClose(false);
  };
  return (
    <Drawer anchor="right" open={open} onClose={() => onClose(false)}>
      <List component="nav" className="side_drawer">
        <ListItem button onClick={() => scrollToSection("starts")}>
          Event Starts in
        </ListItem>
        <ListItem button onClick={() => scrollToSection("info_section")}>
          General Info
        </ListItem>
        <ListItem button onClick={() => scrollToSection("highlights")}>
          Highlighted Events
        </ListItem>
        <ListItem button onClick={() => scrollToSection("tickets")}>
          Buy Tickets
        </ListItem>
        <ListItem button onClick={() => scrollToSection("location")}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
