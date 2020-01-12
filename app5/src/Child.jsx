import React, { Component } from "react";

export default class Child extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log("Updating time", props);
    console.log("Updating time", state);
    return {};
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate() is called");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(prevState);
    return null;
  }

  componentDidUpdate() {
    console.log("Yes Componentt is Updated");
  }

  render() {
    console.log("render is calles");
    return (
      <div>
        {this.props.count}

        {this.props.count === 0 && <h2>Hello The Count is 0</h2>}
      </div>
    );
  }
}
