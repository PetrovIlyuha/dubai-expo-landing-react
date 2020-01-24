import React, { Component } from "react";

export default class Pricing extends Component {
  state = {
    type: ["1-Day Ticket", "3-Day Ticket", "Monthly Pass"],
    prices: [120, 260, 350],
    description: [
      "Open-dated for 1 (single) entry to Expo 2020 Dubai between 20 October 2020 and 10 April 2021",
      "Enjoy 3 days filled with new experiences",
      "Unlimited entries for 30 days"
    ],
    link: [
      "https://www.expo2020dubai.com/ru/tickets/catalogue",
      "https://www.expo2020dubai.com/ru/tickets/catalogue",
      "https://www.expo2020dubai.com/ru/tickets/catalogue"
    ]
  };
  render() {
    return (
      <div className="bck_cadet_blue">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper"></div>
        </div>
      </div>
    );
  }
}
