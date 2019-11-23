import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "",
      obj: "",
      array: ""
    };
  }
  receiveMessageFromChild = msgChild => {
    console.log(msgChild);
    this.setState({ msg: msgChild });
  };
  receiveObjFromChild = obj => {
    console.log(obj);
    this.setState({ obj });
  };
  receiveArrayFromChild = array => {
    console.log(array);
    this.setState({ array });
  };
  render() {
    return (
      <div>
        <h2>Welcome From Parent Component</h2>

        <h2>Message From Child : {this.state.msg}</h2>
        <h3>Objetct From Child : {this.state.obj.fname}</h3>
        <h3>Array Received From Child : {this.state.array[0]}</h3>
        <Child
          msgfunc={this.receiveMessageFromChild}
          objfunc={this.receiveObjFromChild}
          arrayfunc={this.receiveArrayFromChild}
        />
      </div>
    );
  }
}
