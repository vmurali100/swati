import React from "react";

export const HocComponent = InputComponent => {
  class Swati extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0
      };
    }
    hoverCount = () => {
      this.setState({ count: this.state.count + 1 });
    };

    clickCount = () => {
      console.log(this.state.count);
      this.setState({ count: this.state.count + 1 });
    };

    render() {
      return (
        <InputComponent
          hover={this.hoverCount}
          click={this.clickCount}
          count={this.state.count}
        />
      );
    }
  }

  return Swati;
};

export default HocComponent;
