import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components'
import Signup from './components/signup/Signup';
import Login from './components/login/Login';

const Div = styled.div`
background: url('../public/controller.jpg');
`;

function App() {
  return (
    <Div>
      <Switch>
        <Route path='/registration'>
          <Signup />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </Div>
  );
}

export default App;
