import React from "react";
import Slide from "react-reveal/Slide";

export default class CountDown extends React.Component {
  state = {
    deadline: "Oct, 20 , 2020",
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0"
  };

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      console.log("Date had passed");
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / (1000 * 60)) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 3600 * 24));
      this.setState({
        seconds,
        minutes,
        hours,
        days
      });
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.getTimeUntil(this.state.deadline);
    }, 1000);
  }

  render() {
    const { hours, days, minutes, seconds } = this.state;
    return (
      <Slide left delay={1000}>
        <div className="countdown_wrapper">
          <div className="countdown_top">Expo will be opened in</div>
          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">{days}</div>
              <div className="countdown_tag">days</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{hours}</div>
              <div className="countdown_tag">hours</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{minutes}</div>
              <div className="countdown_tag">min</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{seconds}</div>
              <div className="countdown_tag">seconds</div>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}
