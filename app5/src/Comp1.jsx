import React, { Component } from "react";
import axios from "axios";
export default class Comp1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      user: {
        fname: "",
        lname: "",
        email: "",
        id: null
      }
    };
  }
  clearData = () => {
    let user = this.state.user;
    for (let a in user) {
      user[a] = "";
    }
    this.setState({ user });
  };
  addUser = () => {
    console.log("Add user is called");
    console.log(this.state.user);
    console.log(this);
    let vm = this;
    // axios({
    //   method: "POST",
    //   url: "http://localhost:3000/users",
    //   data: this.state.user
    // });
    axios
      .post("http://localhost:3000/users", this.state.user)
      .then(function(response) {
        console.log(this);
        vm.clearData();
      });
  };
  handleChange = event => {
    let user = this.state.user;
    user[event.target.name] = event.target.value;
    this.setState({ user });
  };
  render() {
    return (
      <div>
        <h1>Welcome to Comp1</h1>
        <form>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            name="fname"
            value={this.state.user.fname}
            onChange={e => {
              this.handleChange(e);
            }}
          />
          <br />
          <label htmlFor="fname">Last Name</label>
          <input
            type="text"
            name="lname"
            value={this.state.user.lname}
            onChange={e => {
              this.handleChange(e);
            }}
          />
          <br />
          <label htmlFor="fname">Email Name</label>
          <input
            type="text"
            name="email"
            value={this.state.user.email}
            onChange={e => {
              this.handleChange(e);
            }}
          />
          <br />

          <button onClick={this.addUser} type="button">
            Add User
          </button>
        </form>
        <br />

        <table border="1">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Id</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(u => {
              return (
                <tr key={u.id}>
                  {Object.values(u).map(val => {
                    return <td key={val}>{val}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  componentDidMount() {
    axios.get("http://localhost:3000/users").then(res => {
      console.log(res.data);
      this.setState({ users: res.data });
    });
    // axios.get("http://localhost:3000/users").then(res => {
    //   console.log(res.data);
    // });
    // axios({
    //   method: "POST",
    //   url: "http://localhost:3000/users",
    //   data: {
    //     firstName: "Fred",
    //     lastName: "Flintstone",
    //     id: 1
    //   }
    // });
    // axios({
    //   method: "DELETE",
    //   url: "http://localhost:3000/users/1"
    // });

    // axios({
    //   method: "PUT",
    //   url: "http://localhost:3000/users/1"
    // });
    // fetch("http://localhost:3000/users")
    //   .then(res => {
    //     return res.json();
    //   })
    //   .then(response => {
    //     console.log(response);
    //   });
  }
}
