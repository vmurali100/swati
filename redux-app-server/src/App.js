import React, { useState, useEffect } from "react";
import { Button, Form, Container, Row, Col, Table } from "react-bootstrap";
import {
  addUser,
  deleteUser,
  updateUser,
  getLatestUsers
} from "./Actions/index";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { connect } from "react-redux";

import "./App.css";

function App(props) {
  const [user, setUser] = useState({ email: "", password: "" });
  const [index, setIndex] = useState(null);
  const [isEdit, setEdit] = useState(false);
  const { users } = props;

  const getUsers = () => {
    axios.get("http://localhost:3000/users").then(res => {
      props.getLatestUsers(res.data);
    });
  };

  const handleSubmit = () => {
    axios.post("http://localhost:3000/users", user).then(res => {
      getUsers();
    });
  };

  const updateUser = () => {
    console.log(user);
    axios.put("http://localhost:3000/users/" + user.id, user).then(res => {
      getUsers();
    });
  };
  const editUser = (user, index) => {
    console.log(user);
    setUser(user);
    setEdit(true);
  };

  const handleDelete = user => {
    axios.delete("http://localhost:3000/users/" + user.id).then(res => {
      getUsers();
    });
  };

  //This will trigger when application renders
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={user.email}
                  onChange={e => {
                    setUser({ ...user, [e.target.name]: e.target.value });
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={user.password}
                  onChange={e => {
                    setUser({ ...user, [e.target.name]: e.target.value });
                  }}
                />
              </Form.Group>

              {!isEdit && (
                <Button
                  variant="primary"
                  type="button"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Submit
                </Button>
              )}
              {isEdit && (
                <Button
                  variant="primary"
                  type="button"
                  onClick={() => {
                    updateUser();
                  }}
                >
                  Update
                </Button>
              )}
            </Form>
          </Col>
          <Col>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Password</th>
                  <th>ID</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {console.log(users)}
                {users.map((user, index) => {
                  return (
                    <tr key={user.email}>
                      {Object.values(user).map(val => {
                        return <td key={val}>{val}</td>;
                      })}
                      <td>
                        <Button
                          variant="warning"
                          onClick={() => {
                            editUser(user, index);
                          }}
                        >
                          Edit
                        </Button>
                      </td>
                      <td>
                        <Button
                          variant="danger"
                          onClick={() => {
                            handleDelete(user);
                          }}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    users: state
  };
}

export default connect(mapStateToProps, {
  addUser,
  deleteUser,
  updateUser,
  getLatestUsers
})(App);
