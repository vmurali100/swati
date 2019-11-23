import React from "react";
import Comp1 from "./Comp1";
import Parent from "./ChildToParent/Parent";

function App() {
  return (
    <div className="App">
      <h2>Welcome To App Component</h2>

      {/* <Comp1 myName="Murali Krishna" /> */}
      <Parent />
    </div>
  );
}

export default App;
