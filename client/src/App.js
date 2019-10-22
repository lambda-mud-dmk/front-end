import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Signup from './components/signup/Signup';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/registration'>
          <Signup />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
