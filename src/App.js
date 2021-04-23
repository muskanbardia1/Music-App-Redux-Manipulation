import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { songInfo, songList } from "./store/actions";
import { store } from "./index";
import InitialList from "./components/InitialList";
import DropDown from "./components/DropDown";
import AddUser from "./components/AddUser";
import SignIn from "./components/SignIn";
import { useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router";
import WelcomSong from "./components/WelcomSong";
import SignUp from "./components/SignUp";
import dashboard from "./components/Dashboard";
function App() {
  const { isLogged } = useSelector((state) => state.signUpList);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Route exact path="/login" component={SignIn} />
        <PrivateRoute path="/adduser" component={AddUser} isLogged={isLogged} />
        <PrivateRoute
          path="/welcome"
          component={WelcomSong}
          isLogged={isLogged}
        />
        <PrivateRoute
          path="/dashboard"
          component={dashboard}
          isLogged={isLogged}
        />
      </Switch>
    </div>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <>
    {console.log(rest)}
    <Route
      {...rest}
      render={(props) =>
        rest.isLogged ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )
      }
    />
  </>
);

export default App;
