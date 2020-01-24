import React, { Component } from "react";
import MyButton from "../utils/Button";
import Zoom from "react-reveal/Zoom";

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
    ],
    delay: [500, 0, 300]
  };

  showTicketPricesBoxes = () =>
    this.state.prices.map((price, i) => {
      return (
        <Zoom key={i} delay={this.state.delay[i]}>
          <div className="pricing_item">
            <div className="pricing_inner_wrapper">
              <div className="pricing_title">{this.state.type[i]}</div>
              <div className="pricing_title">
                <span>{this.state.prices[i]}</span>AED
              </div>
              <div className="pricing_description">
                {this.state.description[i]}
              </div>
              <div className="pricing_buttons">
                <MyButton
                  text="Order Tickets"
                  color="teal"
                  bck="#BADA55"
                  link={this.state.link[i]}
                />
              </div>
            </div>
          </div>
        </Zoom>
      );
    });
  render() {
    return (
      <div className="bck_cadet_blue">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showTicketPricesBoxes()}</div>
        </div>
      </div>
    );
  }
}
