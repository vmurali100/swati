import React, { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: { id: "", email: "", username: "", password: "" }
    };
  }

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="id">Id</label>
            <input
              type="text"
              className="form-control"
              value={this.props.objFromParent.id}
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              value={this.props.objFromParent.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">User Name</label>
            <input
              type="email"
              className="form-control"
              value={this.props.objFromParent.username}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              value={this.props.objFromParent.password}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
