import { VFC } from 'react';

import styles from './App.module.css';

export const App: VFC = () => {
  return (
    <section className={styles.wrap}>
      <h1 className={styles.title}>React Test Examples</h1>
    </section>
  );
};
