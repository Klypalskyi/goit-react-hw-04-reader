import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styles from './App.module.css';
import Reader from '../Reader/Reader';

import publications from '../Reader/publications.json';

const App = () => (
  <div className={styles.container}>
    <Switch>
      <Route
        path="/reader"
        component={props => <Reader {...props} items={publications} />}
      />
      <Route path="">
        <Redirect to="/reader" />
      </Route>
    </Switch>
  </div>
);

export default App;
