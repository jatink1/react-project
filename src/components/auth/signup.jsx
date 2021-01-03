import React from "react";
import Form from "react-bootstrap/Form";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userEmail: "",
      userPassword: "",
      userGender: "",
      userAge: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    e.preventDefault();
    let nam = e.target.name;
    let val = e.target.value;
    console.log(e.target.name, e.target.value);
    this.setState({ [nam]: val });
  }

  handleSubmit() {
    console.log(this.state);
    console.log(this.state);
  }

  render() {
    return (
      <Form>
        <h3>Register</h3>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="userName"
            type="text"
            placeholder="Name"
            onChange={this.changeHandler}
          ></Form.Control>
        </Form.Group>

        {/* Email */}
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="userEmail"
            type="email"
            placeholder="Email"
            onChange={this.changeHandler}
          ></Form.Control>
        </Form.Group>

        {/* Password */}
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="userPassword"
            type="password"
            placeholder="Password"
            onChange={this.changeHandler}
          ></Form.Control>
        </Form.Group>

        {/* Age */}
        <Form.Group>
          <Form.Label>Age</Form.Label>
          <Form.Control
            name="userAge"
            type="number"
            placeholder="Age"
            onChange={this.changeHandler}
          ></Form.Control>
        </Form.Group>

        {/* Gender */}
        <Form.Group>
          <Form.Label>Gender</Form.Label>
          <Form.Control
            name="userGender"
            type="text"
            placeholder="Gender"
            onChange={this.changeHandler}
          ></Form.Control>
        </Form.Group>

        <button
          type="button"
          className="btn btn-dark btn-lg btn-block"
          onClick={() => this.handleSubmit()}
        >
          Register
        </button>
        <p className="forgot-password text-right">
          Already registered <a href="#">log in?</a>
        </p>
      </Form>
    );
  }
}
