// LoginForm.jsx

import { useState } from "react";
import * as usersService from "../../utilities/UserRequests/users-service";
// mui below
import Button from "@mui/material/Button";
import { Input, TextField } from "@mui/material";

export default function LogInForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.logIn(credentials);
      // how does this work again...?
      setUser(user);
    } catch {
      setError("Log In Failed - Try Again");
    }
  }

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Email</label>
          <TextField
            sx={{
              borderRadius: "10px",
            }}
            id="outlined-basic"
            variant="outlined"
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <Button variant="contained" type="submit">
            LOG IN
          </Button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
