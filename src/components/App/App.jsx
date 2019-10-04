import React from 'react';
import styles from './App.module.css';
import Reader from '../Reader/Reader';

import publications from '../Reader/publications.json';

const App = () => {
  return (
    <div className={styles.container}>
      <Reader items={publications} />
    </div>
  );
};

export default App;
