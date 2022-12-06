import React from "react";
import { useState } from "react";
import LogInForm from "../../components/LogInForm/LogInForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
// mui
import Button from "@mui/material/Button";


export default function AuthPage(props) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <>
      <h1 class="logo">chatter[box]</h1>
      <Button variant="contained" onClick={() => setShowSignUp(!showSignUp)}>
        {showSignUp ? "Log In" : "Sign Up"}
      </Button>
      {showSignUp ? (
        <SignUpForm setUser={props.setUser} />
      ) : (
        <LogInForm setUser={props.setUser} />
      )}
    </>
  );
}
