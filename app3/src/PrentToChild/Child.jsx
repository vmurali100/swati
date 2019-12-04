import React, { Component } from "react";

export default class Child extends Component {
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
              name="id"
              onChange={e => {
                this.props.handleChange(e);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              value={this.props.objFromParent.email}
              name="email"
              onChange={e => {
                this.props.handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">User Name</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={this.props.objFromParent.username}
              onChange={e => {
                this.props.handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={this.props.objFromParent.password}
              onChange={e => {
                this.props.handleChange(e);
              }}
            />
          </div>

          <button
            type="button"
            className="btn btn-primary"
            onClick={this.props.updateUser}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
