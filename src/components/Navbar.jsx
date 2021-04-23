import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { store } from "../index.js";
import { Link } from "react-router-dom";
import clsx from "clsx";
import {
  albumList,
  artistList,
  songList,
  trackList,
} from "../store/actions.jsx";
import { Button } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Avatar from "@material-ui/core/Avatar";
import InitialList from "./InitialList";
import Favorits from "./Favorits.jsx";
import { useSelector } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import Drawer from "@material-ui/core/Drawer";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";

import { userData, curProfile } from "../store/actions";
import Auth from "../store/Auth.jsx";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}));
const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [search, setSearch] = React.useState("");
  const [dropValue, setdropValue] = React.useState("tracks");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [favFlag, setFavFlag] = React.useState(true);
  const { infoList } = useSelector((state) => state);
  const { favList } = useSelector((state) => state);
  const { profile } = useSelector((state) => state);
  // drawer
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <IconButton color="inherit">
              <Avatar src="../img_40723.png" className={classes.large} />
            </IconButton>

            <Typography
              style={{ textDecoration: "none" }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              {profile.name}
            </Typography>
          </div>
        }
      </List>
      <List>
        <Typography
          variant="h"
          component="h1"
          gutterBottom
          style={{ display: "flex", justifyContent: "center" }}
        >
          Switch List
        </Typography>
        {infoList &&
          infoList.length > 0 &&
          infoList.map(
            (user) =>
              user.name !== profile.name && (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Typography
                    onClick={() => switchUser(user)}
                    style={{ cursor: "pointer" }}
                  >
                    {user.name}
                  </Typography>
                </div>
              )
          )}
      </List>
      <List style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/dashboard">
          <Button style={{ display: "flex", justifyContent: "center" }}>
            View Profile
          </Button>
        </Link>
      </List>
      <Divider />
      <List>
        <Typography
          variant="h"
          component="h1"
          gutterBottom
          style={{ display: "flex", justifyContent: "center" }}
        >
          Favorites
        </Typography>
        {profile && profile.fav && profile.fav.length > 0 ? (
          profile.fav.map((list) => (
            <StyledMenuItem>
              <ListItemIcon>
                <PlaylistAddCheckIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={list.name} />
            </StyledMenuItem>
          ))
        ) : (
          <StyledMenuItem>
            <ListItemText primary="No favorites added" />
          </StyledMenuItem>
        )}
      </List>
    </div>
  );

  const favFlagChange = () => {
    setFavFlag(!favFlag);
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    Auth.signout();
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl2(event.currentTarget);
    setFavFlag(false);
  };

  const handleClose = () => {
    setAnchorEl2(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const searchResult = () => {
    console.log(dropValue);
    console.log(search);
    if (dropValue == "tracks") {
      console.log("pagl");
      store.dispatch(trackList(search));
    } else if (dropValue == "artist" && search) {
      console.log("artist got selected");
      store.dispatch(artistList(search));
    } else if (dropValue == "album" && search) {
      store.dispatch(albumList(search));
    }
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const switchUser = (profile) => {
    store.dispatch(curProfile(profile));
  };

  const defaultList = () => {
    store.dispatch(songList());
    setFavFlag(true);
  };
  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          aria-label="show 4 new mails"
          color="inherit"
          onClick={handleClick}
        >
          <Badge color="secondary">
            <FavoriteIcon />
          </Badge>
        </IconButton>
        <p onClick={handleClick}>Favorite</p>
      </MenuItem>
      <Link to="/login">
        <MenuItem onClick={handleProfileMenuOpen} style={{ color: "black" }}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <ExitToAppIcon />
          </IconButton>
          <p>SignOut</p>
        </MenuItem>
      </Link>
    </Menu>
  );
  const selectElement = () => {
    console.log("getting sellected");
    const value = document.getElementById("cars").value;
    console.log(value);
    setdropValue(value);
  };

  return (
    <>
      <div className={classes.grow}>
        <AppBar position="fixed">
          <Toolbar>
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="open drawer"
                  onClick={toggleDrawer(anchor, true)}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                onChange={(e) => handleSearch(e)}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
              <Button style={{ color: "white" }} onClick={searchResult}>
                SEARCH
              </Button>
            </div>
            <label for="songs"></label>
            <select name="cars" id="cars" onChange={selectElement}>
              <option value="tracks">Track</option>
              <option value="album">Album</option>
              <option value="artist">Artist</option>
            </select>
            <Typography
              className={classes.title}
              variant="h6"
              noWrap
              onClick={defaultList}
              style={{ cursor: "pointer" }}
            >
              Music-App
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton
                aria-label="show 4 new mails"
                color="inherit"
                onClick={handleClick}
              >
                <Badge color="secondary">
                  <FavoriteIcon />
                </Badge>
              </IconButton>

              <Link to="/login">
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <ExitToAppIcon style={{ color: "white" }} />
                </IconButton>
              </Link>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </div>
      {favFlag ? <InitialList /> : <Favorits />}
    </>
  );
}
