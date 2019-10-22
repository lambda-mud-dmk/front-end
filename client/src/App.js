import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/registration'>
          <Signup />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
