import React from "react";
import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import "./assets/styles.css";

function App() {
  return (
    <div
      className="App"
      style={{ height: "1500px", backgroundColor: "lightblue" }}
    >
      <Header />
      <Featured />
    </div>
  );
}

export default App;
