import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButton from "../utils/Button";

export default class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };
  percentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };
  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, 20);
  }

  render() {
    const { discountStart } = this.state;
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.percentage()}>
            <div className="discount_percentage">
              <span>{`${discountStart}%`}</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Your ticket to Expo 2020 Dubai</h3>
              <p>
                View our range of tickets that enable everyone to enjoy their
                ideal Expo 2020 experience. 1-day and 3-day tickets are great
                for travelers with tight itineraries, while the monthly and
                season passes will suit people who want to keep coming back for
                more.
              </p>
              <MyButton
                text="Purchase Tickets"
                bck="#6fb98f"
                color="white"
                link="https://www.expo2020dubai.com/ru/tickets/catalogue"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}
