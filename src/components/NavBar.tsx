import React, { useState } from "react";
import styled from "styled-components";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { Montserrat } from "common/typography";
import { TextField } from "@mui/material";
import {
  registerUser,
  logoutUser,
  loginUser,
  sendUserPasswordResetEmail,
  loginWithGoogle,
} from "firebaseApp/auth";
import { useStateSelector } from "state";

const StyledToolbar = styled(Toolbar)`
  padding: 20px;

  .header {
    margin-bottom: auto;
  }
`;

const AuthBox = styled(Paper).attrs({ elevation: 10 })`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  padding: 20px;
  height: 150px;

  .top {
    display: flex;
    align-items: center;
  }
  .bottom {
    display: flex;
  }
`;

const NavBar = () => {
  const user = useStateSelector(({ app }) => app.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    registerUser(email, password)
      .then(() => {
        setEmail("");
        setPassword("");
      })
      .catch((err) => alert(err.message));
  };

  const handleLogIn = () => {
    loginUser(email, password)
      .then(() => {
        setEmail("");
        setPassword("");
      })
      .catch((err) => alert(err.message));
  };

  const resetPassword = () => {
    sendUserPasswordResetEmail(email)
      .then(() => {
        setEmail("");
        alert("Password reset email sent");
      })
      .catch((err) => alert(err.message));
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((data) => console.log(data))
      .catch((err) => alert(err.message));
  };
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Montserrat className="header" variant="h6">
          Firebase Recipes
        </Montserrat>
        <Box sx={{ flexGrow: 1 }} />
        {!user ? (
          <AuthBox>
            <div className="top">
              <TextField
                variant="outlined"
                color="primary"
                name="email"
                label="Email"
                required
                size="small"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
              />
              <Box m={1} />
              <TextField
                variant="outlined"
                color="primary"
                required
                size="small"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
              />
            </div>
            <Box m={1} />

            <div className="bottom">
              <Button
                color="secondary"
                variant="contained"
                onClick={handleLogIn}
              >
                Log in
              </Button>
              <Box m={1} />
              <Button
                color="secondary"
                variant="contained"
                onClick={handleRegister}
              >
                Register
              </Button>

              <Box m={1} />
              <Button
                color="secondary"
                variant="contained"
                onClick={resetPassword}
              >
                Reset password
              </Button>
              <Box m={1} />
              <Button
                color="secondary"
                variant="contained"
                onClick={handleGoogleLogin}
              >
                Login with google
              </Button>
            </div>
          </AuthBox>
        ) : (
          <AuthBox>
            <Montserrat>
              <b>{user.email}</b>
            </Montserrat>
            <Button color="secondary" variant="contained" onClick={logoutUser}>
              Log out
            </Button>
          </AuthBox>
        )}
      </StyledToolbar>
    </AppBar>
  );
};
export default NavBar;
