import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/layout/Navbar';
import Routes from './components/routing/Routes';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route component={Routes} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
