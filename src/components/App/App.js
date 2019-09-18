import React from 'react';
import styles from './App.module.css';
import PostReader from '../PostReader/PostReader';

import publications from '../PostReader/publications.json';

const App = () => {
  return (
    <div className={styles.container}>
      <PostReader items={publications} />
    </div>
  );
};

export default App;
