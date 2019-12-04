import React, { Component } from "react";

export default class Comp1 extends Component {
  render() {
    console.log(this.props.users);
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Email</th>
              <th>User Name</th>
              <th>Password</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map((user, index) => {
              return (
                <tr key={user.id}>
                  {Object.values(user).map(val => {
                    return <td key={val}>{val}</td>;
                  })}
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        this.props.editUser(user, index);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        this.props.deleteUser(index);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
