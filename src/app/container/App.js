/**
 * Main App Container
 */
import React from 'react';

import Routes from 'src/app/routes';

import logo from 'src/public/logo.webp';

import styles from './app.css';

function App() {
  console.log(logo);
  return ( 
    <main className={styles.container}>
      <header className={styles.header}>
        <img src={logo} className={styles.headerImg} alt="logo" />
        <span className={styles.headerTitle}>Eden</span>
      </header>
      <section className={styles.page}>
        <Routes.BoardPage />
      </section>
    </main>
  );
}

export default App;
