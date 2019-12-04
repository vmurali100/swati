import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editUser: { id: "", email: "", username: "", password: "" },
      users: [
        {
          id: 2632,
          email: "PRossi@placerat.org",
          username: "LCarnevale",
          password: "BYoV9"
        },
        {
          id: 2633,
          email: "SAhmad@nullam.org",
          username: "HDavis",
          password: "RBtoE"
        },
        {
          id: 2634,
          email: "WMcnamee@turpis.gov",
          username: "SPartin",
          password: "K4SOV"
        },
        {
          id: 2635,
          email: "ALaventure@odio.com",
          username: "EKelley",
          password: "SuxXu"
        },
        {
          id: 2636,
          email: "ASmoaks@sed.ly",
          username: "JMyers",
          password: "yDdrz"
        }
      ]
    };
  }
  updateUser = () => {
    let users = this.state.users;
    users[this.state.index] = this.state.editUser;
    this.setState({ users });
    this.clearForm();
  };
  handleChange = e => {
    let editUser = this.state.editUser;
    editUser[e.target.name] = e.target.value;
    this.setState({ editUser });
  };
  editUser = (user, index) => {
    this.setState({ editUser: Object.assign({}, user), index });
  };
  clearForm = () => {
    this.state.editUser = {
      id: "",
      email: "",
      username: "",
      password: ""
    };
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-8">
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
                  {this.state.users.map((user, index) => {
                    return (
                      <tr key={user.id}>
                        {Object.values(user).map(val => {
                          return <td key={val}>{val}</td>;
                        })}
                        <td>
                          <button
                            className="btn btn-warning"
                            onClick={() => {
                              this.editUser(user, index);
                            }}
                          >
                            Edit
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              this.deleteUser(user, index);
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
            <div className="col-4">
              <Child
                objFromParent={this.state.editUser}
                handleChange={this.handleChange}
                updateUser={this.updateUser}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
