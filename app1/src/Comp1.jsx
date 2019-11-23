import React, { Component } from "react";
import Comp2 from "./Comp2";

export default class Comp1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      welcomeMessage: "Welcome Message from Component 1",
      obj: {
        fname: "Murali",
        lname: "Krishna"
      },
      users: ["Murali", "Krishna", "Ram", "Ravi"]
    };
    console.log(props);
  }

  render() {
    return (
      <div>
        <h2>I am From Child Component</h2>
        <Comp2
          abc={this.state.welcomeMessage}
          myObj={this.state.obj}
          arr={this.state.users}
        />
      </div>
    );
  }
}
