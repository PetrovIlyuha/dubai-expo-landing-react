import React from "react";
import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
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
      <Featured />
      <EventInfo />
      <Highlights />
      <Pricing />
    </div>
  );
}

export default App;
