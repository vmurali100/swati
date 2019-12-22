import React, { Component } from "react";
import HocComponent from "./HocComponent";

class HoverCount extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.count}</h2>
        <button onMouseOver={this.props.hover}>Increase On Mousehover</button>
      </div>
    );
  }
}

export default HocComponent(HoverCount);
