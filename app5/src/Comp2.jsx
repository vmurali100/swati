import React, { Component } from "react";
import Child from "./Child";

export default class Comp2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log(props);
    console.log(state);
    return { favoritecolor: props.favcol };
  }

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <button onClick={this.increaseCount}>Increase</button>
        <Child count={this.state.count} />
      </div>
    );
  }
}
