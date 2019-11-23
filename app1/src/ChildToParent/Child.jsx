import React, { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Helo World From Child",
      obj: {
        fname: "Swati",
        lname: "SS"
      },
      array: ["JS", "React"]
    };
    console.log(props);
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.msgfunc(this.state.message);
          }}
        >
          Send Message to Parent
        </button>
        <br />
        <button
          onClick={() => {
            this.props.objfunc(this.state.obj);
          }}
        >
          Send Obj to Parent
        </button>
        <br />
        <button
          onClick={() => {
            this.props.arrayfunc(this.state.array);
          }}
        >
          Send Array to Parent
        </button>
      </div>
    );
  }
}
