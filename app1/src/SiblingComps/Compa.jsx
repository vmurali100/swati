import React, { Component } from "react";

export default class Compa extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Message From COMP A",
      obj: {
        fname: "Murali",
        lname: "CompA"
      },
      array: ["AbC", "CDE", "ABDC"]
    };
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.sendMessage(this.state.message);
          }}
        >
          Send Message to Comp B
        </button>
        <br />
        <button
          onClick={() => {
            this.props.sendObj(this.state.obj);
          }}
        >
          Send Object to Comp B
        </button>
        <br />
        <button
          onClick={() => {
            this.props.sendArray(this.state.array);
          }}
        >
          Send Array to Comp B
        </button>
        <br />
      </div>
    );
  }
}
