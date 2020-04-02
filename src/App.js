import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Components
import MainNavbar from './components/layout/MainNavbar';
// import Newsletter from './components/layout/Newsletter';
import Footer from './components/layout/Footer';
import Routes from './components/routing/Routes';

function App() {
  return (
    <Router>
      <Fragment>
        <MainNavbar />
        <Switch>
          <Route component={Routes} />
        </Switch>
        {/* <Newsletter /> */}
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
