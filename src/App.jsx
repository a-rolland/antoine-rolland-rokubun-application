import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import AuthForm from "./components/AuthForm/AuthForm";
import authServices from "./Services/auth-services";
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";

const App = () => {
  const initialState = {
    loggedInUser: JSON.parse(localStorage.getItem("loggedInUser")) || null,
  };
  const [state, setState] = useState(initialState);

  const getTheUser = (userObj) => {
    setState({
      loggedInUser: userObj,
    });
  };

  useEffect(() => {
    const fetchUser = () => {
      if (state.loggedInUser === null) {
        authServices
          .loggedIn()
          .then((response) => {
            localStorage.setItem("loggedInUser", JSON.stringify(response));
            setState({
              loggedInUser: response,
            });
          })
          .catch((err) => {
            setState({
              loggedInUser: false,
            });
          });
      }
    };
    fetchUser();
  }, [state.loggedInUser]);

  const handleUpdateUser = () => {
    authServices
      .loggedIn()
      .then((response) => {
        setState({
          loggedInUser: response,
        });
      })
      .catch((err) => {
        setState({
          loggedInUser: false,
        });
      });
  };

  return (
    <div>
      <Navbar
        userInSession={state.loggedInUser}
        getUser={getTheUser}
        updateUser={handleUpdateUser}
      />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Homepage
              {...props}
              userInSession={state.loggedInUser}
              getUser={getTheUser}
              updateUser={handleUpdateUser}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={(props) => (
            <AuthForm
              {...props}
              login
              userInSession={state.loggedInUser}
              getUser={getTheUser}
              updateUser={handleUpdateUser}
              authMessage="Don't have any account yet ?"
              formRedirectLink="/signup"
              formRedirectText=" Sign up"
            />
          )}
        />
        <Route
          exact
          path="/signup"
          render={(props) => (
            <AuthForm
              {...props}
              signup
              userInSession={state.loggedInUser}
              getUser={getTheUser}
              updateUser={handleUpdateUser}
              authMessage="Already have an account ?"
              formRedirectLink="/login"
              formRedirectText=" Login"
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
