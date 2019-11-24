import React, { Component } from "react";

export default class CompB extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <p>Mesage Received From Comp A:{this.props.msg}</p>
        <p>Object Received From Comp A:{this.props.obj.fname}</p>
        <p>Array Received From Comp A:{this.props.array[0]}</p>
      </div>
    );
  }
}
