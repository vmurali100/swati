import React, { Component } from "react";
import HocComponent from "./HocComponent";

class ClickCount extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <button onClick={this.props.click}>Increase</button>
      </div>
    );
  }
}

export default HocComponent(ClickCount);
