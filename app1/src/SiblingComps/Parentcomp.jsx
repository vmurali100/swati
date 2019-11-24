import React, { Component } from "react";
import Compa from "./Compa.jsx";
import CompB from "./CompB.jsx";

export default class Parentcomp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "",
      obj: "",
      array: ""
    };
  }

  exchangeMessage = msg => {
    console.log(msg);
    this.setState({ msg });
  };
  exchangeObj = obj => {
    this.setState({ obj });
  };
  exchangeArray = array => {
    this.setState({ array });
  };

  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        <Compa
          sendMessage={this.exchangeMessage}
          sendObj={this.exchangeObj}
          sendArray={this.exchangeArray}
        />
        <CompB
          msg={this.state.msg}
          obj={this.state.obj}
          array={this.state.array}
        />
      </div>
    );
  }
}
