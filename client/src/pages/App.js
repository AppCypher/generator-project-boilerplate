import React from 'react';
import Router from './Router';
import { Link } from 'react-router-dom';

const App = props => (
  <div className={'box'}>
    <nav>This is the navbar</nav>
    <Router />
    <Link to="/what-we-do">What We Do!</Link>
    <footer>This is a footer</footer>
  </div>
);

export default App;

