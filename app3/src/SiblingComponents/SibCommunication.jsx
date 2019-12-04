import React, { Component } from "react";
import Comp2 from "./Comp2";
import Comp1 from "./Comp1";

export default class SibCommunication extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users,
      editObj: {
        id: "",
        email: "",
        username: "",
        password: ""
      }
    };
  }

  handleChange = e => {
    let editObj = this.state.editObj;
    editObj[e.target.name] = e.target.value;
    this.setState({ editObj });
  };
  deleteUser = index => {
    let users = this.state.users;
    users.splice(index, 1);
    this.setState({ users });
  };

  editUser = (editObj, index) => {
    this.setState({ editObj: Object.assign({}, editObj), index });
  };

  updateUser = () => {
    let users = this.state.users;
    users[this.state.index] = this.state.editObj;
    this.setState({ users });
    this.clearforrm();
  };
  clearforrm = () => {
    let editObj = {
      id: "",
      email: "",
      username: "",
      password: ""
    };
    this.setState({ editObj });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <Comp1
              users={this.state.users}
              deleteUser={this.deleteUser}
              editUser={this.editUser}
            />
          </div>
          <div className="col-4">
            <Comp2
              editObj={this.state.editObj}
              handleChange={this.handleChange}
              updateUser={this.updateUser}
            />
          </div>
        </div>
      </div>
    );
  }
}

let users = [
  {
    id: 17418,
    email: "LBunker@sit.net",
    username: "GMclaughlin",
    password: "S0dyp"
  },
  {
    id: 17419,
    email: "THutchinson@augue.ly",
    username: "RWooten",
    password: "PVCkO"
  },
  {
    id: 17420,
    email: "DKirkley@at.io",
    username: "JHackman",
    password: "SicVt"
  },
  {
    id: 17421,
    email: "SDelaura@pulvinar.net",
    username: "AGriffin",
    password: "ICA5s"
  },
  {
    id: 17422,
    email: "KMinihane@sed.org",
    username: "ADunn",
    password: "rYhGj"
  }
];
