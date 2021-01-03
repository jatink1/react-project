import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
      userPassword: "",
      toDashboard: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserEmail = this.handleUserEmail.bind(this);
    this.handleUserPassword = this.handleUserPassword.bind(this);
  }

  handleUserEmail(e) {
    this.setState({ userEmail: e.target.value });
  }
  handleUserPassword(e) {
    this.setState({ userPassword: e.target.value });
    console.log(e.target.name);
  }

  handleSubmit() {
    console.log("user details: ", this.state);
    this.setState({ toDashboard: true });
  }

  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <Form>
        <h3>Login</h3>
        {/* email */}
        <Form.Group controlId="userEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={this.state.userEmail ? this.state.userEmail : ""}
            onChange={this.handleUserEmail}
          />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="userPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={this.state.userPassword ? this.state.userPassword : ""}
            name="userPassword"
            onChange={this.handleUserPassword}
          />
          <Form.Text className="text-muted">
            Password must be atleast 8 char long.
          </Form.Text>
        </Form.Group>

        <Button
          className="btn btn-dark btn-lg btn-block"
          type="button"
          onClick={() => this.handleSubmit()}
        >
          Submit
          {/* <Link to="/dashboard">home</Link>; */}
        </Button>
      </Form>
    );
  }
}
