import React, { useState } from "react";
import "./App.css";
import { connect } from "react-redux";
import { Button, Form, Container, Row, Col, Table } from "react-bootstrap";
import { addUser, deleteUser, updateUser } from "./Actions";

function App(props) {
  const [user, setUser] = useState({ email: "", password: "" });
  const [index, setIndex] = useState(null);
  const [isEdit, setEdit] = useState(false);
  const handleSubmit = () => {
    props.addUser(user);
    setUser({ email: "", password: "" });
  };

  const handleDelete = index => {
    props.deleteUser(index);
  };

  const editUser = (user, i) => {
    setUser(user);
    setIndex(i);
    setEdit(true);
  };

  const updateUser = () => {
    props.updateUser(index, user);
    setUser({ email: "", password: "" });
    setEdit(false);
  };
  const { users } = props;
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
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
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
                            handleDelete(index);
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
  console.log("State In App Component : ", state);
  return {
    users: state
  };
}
export default connect(mapStateToProps, { addUser, deleteUser, updateUser })(
  App
);
