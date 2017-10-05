import React from 'react';
import { Switch, Route } from 'react-router-dom';

import WhoWeAre from './WhoWeAre';
import WhatWeDo from './WhatWeDo';
import Blogs from './Blogs';
import Careers from './Careers';
import Contact from './Contact';


const Router = () => (
  <Switch>
    <Route exact path="/" component={WhoWeAre} />
    <Route exact path="/who-we-are" component={WhoWeAre} />
    <Route exact path="/what-we-do" component={WhatWeDo} />
    <Route exact path="/blogs" component={Blogs} />
    <Route exact path="/careers" component={Careers} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
);

export default Router;
