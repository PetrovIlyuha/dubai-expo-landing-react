import React from "react";
import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import "./assets/styles.css";
import EventInfo from "./components/eventInfo";
import Highlights from "./components/highlights";
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
    </div>
  );
}

export default App;
