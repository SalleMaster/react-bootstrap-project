import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Home from '../home/Home';
import About from '../about/About';
import Services from '../services/Services';
import Blog from '../blog/Blog';
import Contact from '../contact/Contact';
import NotFound from '../layout/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/services' component={Services} />
      <Route exact path='/blog' component={Blog} />
      <Route exact path='/contact' component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
