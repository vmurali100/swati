import React, { Component } from "react";

export default class Comp2 extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log(props);
  }

  render() {
    return (
      <div>
        <h3>I am from Com2</h3>
        Message From Comp1 : {this.props.abc}
        <p>Object Received From Comp1 : {this.props.myObj.fname}</p>
        <p>Array Received From Comp1 :</p>
        <ul>
          {this.props.arr.map(user => {
            return <li key={user}>{user}</li>;
          })}
        </ul>
      </div>
    );
  }
}
