import React, { Component } from "react";
import { signUp } from "../../utilities/UserRequests/users-service";
import "./SignUpForm.css";
// mui below

import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { TextField, Input, Button, Link } from "@mui/material";

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
      // <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        {/* Left side */}
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "right",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 className="logo">chatter[box]</h1>
          <h3> Welcome! </h3>
          {/* placeholder circle */}
          <svg xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="100" />
          </svg>
          <h6>Upload a Profile Photo</h6>
        </Grid>
        {/* Right Side */}
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          elevation={6}
          square
          sx={{ display: "flex", justifyContent: "left", alignItems: "center" }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="form"
              autoComplete="off"
              onSubmit={this.handleSubmit}
              sx={{ display: "flex", flexDirection: "column" }}
              className="TextField-without-border-radius"
            >
              <Input
                className="outlined-basic"
                variant="outlined"
                type="text"
                name="firstname"
                value={this.state.name}
                onChange={this.handleChange}
                placeholder="First Name"
                margin="normal"
                fullWidth
                required
                autoFocus
                disableUnderline
              />

              <Input
                className="outlined-basic"
                variant="outlined"
                type="text"
                name="lastname"
                value={this.state.name}
                onChange={this.handleChange}
                placeholder="Last Name"
                margin="normal"
                fullWidth
                required
                autoFocus
                disableUnderline
              />

              <Input
                className="outlined-basic"
                variant="outlined"
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Email"
                margin="normal"
                fullWidth
                required
                autoFocus
                disableUnderline
              />

              <Input
                className="outlined-basic"
                variant="outlined"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="Password"
                margin="normal"
                fullWidth
                required
                autoFocus
                disableUnderline
              />

              <Input
                className="outlined-basic"
                variant="outlined"
                type="password"
                name="confirm"
                value={this.state.confirm}
                onChange={this.handleChange}
                placeholder="Confirm Password"
                margin="normal"
                fullWidth
                required
                autoFocus
                disableUnderline
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, borderRadius: "30px" }}
                disabled={disable}
              >
                START CHATTING
              </Button>
              <Link 
                variant="contained"
                onClick={() => this.props.setShowSignUp(!this.props.showSignUp)}
              >
                {this.props.showSignUp
                  ? "Already have an account? Log In!"
                  : "Don't have an account? Sign Up!"}
              </Link>
              <p className="error-message">&nbsp;{this.state.error}</p>
            </Box>
          </Box>
        </Grid>
      </Grid>
      // </ThemeProvider>
    );
  }
}

export default SignUpForm;
