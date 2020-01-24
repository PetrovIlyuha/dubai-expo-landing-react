import React from "react";
import Button from "@material-ui/core/Button";
import TicketIcon from "../../assets/images/icons/ticket.png";

export default function MyButton({ text, bck, color, link }) {
  return (
    <Button
      href={link}
      variant="contained"
      size="small"
      style={{ background: bck, color: color, padding: "10px" }}
    >
      <img src={TicketIcon} alt="ticket-icon" className="iconImage" />
      {text}
    </Button>
  );
}
