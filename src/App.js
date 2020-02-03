import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyle from './styles/global';
import HomePage from './pages/home';
import OverviewPage from './pages/overview';

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/overview/:id" component={OverviewPage} />
    </Switch>
  </BrowserRouter>
)

export default App;
