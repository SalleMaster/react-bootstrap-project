import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Components
import MainNavbar from './components/layout/MainNavbar';
import Routes from './components/routing/Routes';

function App() {
  return (
    <Router>
      <Fragment>
        <MainNavbar />
        <Switch>
          <Route component={Routes} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
