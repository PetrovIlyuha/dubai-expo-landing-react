import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const SideDrawer = ({ open, onClose }) => {
  return (
    <Drawer anchor="right" open={open} onClose={() => onClose(false)}>
      <List component="nav" className="side_drawer">
        <ListItem button onClick={() => console.log("Menu Item Clicked")}>
          Event Starts in
        </ListItem>
        <ListItem button onClick={() => console.log("General Info")}>
          General Info
        </ListItem>
        <ListItem button onClick={() => console.log("Highlights")}>
          Highlighted Events
        </ListItem>
        <ListItem button onClick={() => console.log("tickets")}>
          Buy Tickets
        </ListItem>
        <ListItem button onClick={() => console.log("location")}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
