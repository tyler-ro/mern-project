import React, { Component } from "react";
import { signUp } from "../../utilities/UserRequests/users-service";
// mui below
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

export class SignUpForm extends Component {
  state = {
    // add first name, last name
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      error: "",
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = { ...this.state };
      delete formData.error;
      delete formData.confirm;

      const user = await signUp(formData);
      this.props.setUser(user);
    } catch (error) {
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };
  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>First Name</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="text"
              name="firstname"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <label>Last Name</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="text"
              name="lastname"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <label>Email</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <label>Password</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <label>Confirm</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="password"
              name="confirm"
              value={this.state.confirm}
              onChange={this.handleChange}
              required
            />
            <Button variant="contained" type="submit" disabled={disable}>
              SIGN UP
            </Button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}

export default SignUpForm;
