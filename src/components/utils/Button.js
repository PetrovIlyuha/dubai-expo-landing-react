import React from "react";
import Button from "@material-ui/core/Button";
import TicketIcon from "../../assets/images/icons/ticket.png";

export default function MyButton(props) {
  return (
    <Button
      href="http://google.com"
      variant="contained"
      size="small"
      style={{ background: "orange", color: "white" }}
    >
      <img src={TicketIcon} alt="ticket-icon" className="iconImage" />
      Buy Tickets
    </Button>
  );
}
