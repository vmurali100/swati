import React, { Component } from "react";

export default class Comp2 extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="id">Id</label>
            <input
              type="text"
              className="form-control"
              name="id"
              value={this.props.editObj.id}
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
              name="email"
              value={this.props.editObj.email}
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
              value={this.props.editObj.username}
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
              value={this.props.editObj.password}
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
