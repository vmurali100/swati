import React from "react";
import "./App.css";
import ClickCount from "./ClickCount";
import HoverCount from "./HoverCount";

function App() {
  return (
    <div className="App">
      <ClickCount />
      <hr />
      <HoverCount />
    </div>
  );
}

export default App;
