import React from "react";
import { Element } from "react-scroll";
import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import Location from "./components/Location/Index";
import Footer from "./components/header_footer/Footer";
import "./assets/styles.css";
import EventInfo from "./components/eventInfo";
import Highlights from "./components/highlights";
import Pricing from "./components/Pricing";
function App() {
  return (
    <div
      className="App"
      style={{ height: "1500px", backgroundColor: "lightblue" }}
    >
      <Header />
      <Element name="starts">
        <Featured />
      </Element>
      <Element name="info_section">
        <EventInfo />
      </Element>
      <Element name="highlights">
        <Highlights />
      </Element>
      <Element name="tickets">
        <Pricing />
      </Element>
      <Element name="location">
        <Location />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
