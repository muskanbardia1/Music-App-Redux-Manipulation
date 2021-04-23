import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { deepOrange } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import { Label } from "@material-ui/icons";
import Alert from "@material-ui/lab/Alert";
import { Route, Switch, Link } from "react-router-dom";
import uuid from "uuid-random";
import { store } from "..";
import { userData, curProfile } from "../store/actions";
import { connect, useSelector } from "react-redux";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      Your Website
      {new Date().getFullYear()}
    </Typography>
  );
}

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    display: "flex",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  typo: {
    width: "100%",
    maxWidth: 500,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function AddUser({ userProfile }) {
  const [username, setUsername] = useState("");
  const [flag, setFlag] = useState(true);
  const { infoList } = useSelector((state) => state);

  const changeFlag = () => {
    setFlag(false);
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const stoprender = (e) => {
    e.preventDefault();
    store.dispatch(userData({ name: username, fav: [] }));
    setFlag(true);
  };
  const passProfile = (profile) => {
    console.log(profile);
    store.dispatch(curProfile(profile));
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
      </div>

      <div className={classes.typo}>
        <Typography variant="h4" gutterBottom>
          Select a List
        </Typography>
      </div>

    
      {infoList &&
        infoList.length > 0 &&
        infoList.map((user) => (
          <Link to="/welcome">
            <IconButton
              aria-label="show 4 new mails"
              color="inherit"
              onClick={() => passProfile(user)}
            >
              <Avatar src="src\black-music-icon_318-9277.jpg" />
            </IconButton>
            <Typography style={{textDecoration:"none"}}>{user.name}</Typography>
          </Link>
        ))}

      <div>
        {flag ? (
          <Button color="primary" onClick={changeFlag}>
            Create a new List
          </Button>
        ) : (
          <form className={classes.form} Validate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="List Name"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={(e) => handleChange(e)}
            />
            {username.length === 0 ? (
              <Alert severity="error">Fill a list name</Alert>
            ) : (
              ""
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(e) => stoprender(e)}
            >
              Add List
            </Button>
          </form>
        )}
      </div>

      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default AddUser;
