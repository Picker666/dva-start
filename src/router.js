import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import SomeThing from './routes/SomeThing';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/someThing" exact component={SomeThing} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
