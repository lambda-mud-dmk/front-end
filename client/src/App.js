import React from "react";
import { Switch, Route } from "react-router-dom";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import GameWorld from "./components/game/GameWorld";
import PrivateRoute from "./components/protected/PrivateRoute";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/registration">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/play">
          <GameWorld />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
