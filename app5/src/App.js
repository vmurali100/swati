import React from "react";
import "./App.css";
import { connect } from "react-redux";
function App(props) {
  console.log(props);
  return (
    <div className="App">
      <h2>Hello World</h2>
      <button
        onClick={() => {
          props.prepareCofee();
        }}
      >
        Prepare Coffee
      </button>

      <button
        onClick={() => {
          props.prepareTea();
        }}
      >
        Prepare Tea
      </button>
    </div>
  );
}

// Map state to Props has to return an Object Always
function mapStateToProps(state) {
  console.log(state);
  return {};
}

export default connect(mapStateToProps, { prepareCofee, prepareTea })(App);

//Actions to trigger reducer
function prepareCofee() {
  return {
    type: "COFFEE"
  };
}

function prepareTea() {
  return {
    type: "TEA"
  };
}
