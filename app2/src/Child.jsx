import React, { Component } from "react";

export default class Child extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="id">Id</label>
            <input type="text" className="form-control" value={user.id} />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" value={user.email} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">User Name</label>
            <input
              type="email"
              className="form-control"
              value={user.username}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              value={user.password}
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

let user = {
  id: null,
  email: "",
  username: "",
  password: ""
};
