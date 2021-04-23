import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signUp, loggedIn } from "../store/actions";
import { store } from "..";
import Auth from "../store/Auth";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const { signUpList } = useSelector((state) => state);
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [flag, setflag] = useState(true);
  const classes = useStyles();
  let history = useHistory();
  const handleEmail = (e) => {
    setemail(e.target.value);
  };

  const handlePass = (e) => {
    setpass(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (signUpList.email == email && signUpList.pass == pass) {
      store.dispatch(loggedIn(true));
      history.push("/adduser");
    } else {
      document.getElementById("invalid").innerHTML = "invalid user data!";
    }
  };
  useEffect(() => {
    if (!signUpList.email) {
      history.push("/");
    }
  }, [signUpList]);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={(e) => handleSubmit(e)}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => handleEmail(e)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => handlePass(e)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>{" "}
          <span id="invalid"></span>
        </form>
      </div>
    </Container>
  );
}
