/**
 * Main App Container
 */
import React from 'react';

import Routes from 'src/app/routes';

import styles from './app.css';

function App() {

  return ( 
    <main className={styles.container}>
      <header>
        <img className={styles.headerImg} alt="logo" />
        <h1 className={styles.headerTitle}>Eden</h1>
      </header>
      <section className={styles.page}>
        <Routes.BoardPage />
      </section>
    </main>
  );
}

export default App;
