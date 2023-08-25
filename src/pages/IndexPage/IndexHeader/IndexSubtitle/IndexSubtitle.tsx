import type { Component } from 'solid-js';

import styles from './IndexSubtitle.module.css';

const IndexSubtitle: Component = () => {
  return (
    <>
        <h3 class={styles.subtitle}>
            My name is Denis. And I'm developer (🐍, 🦀, js).
        </h3>
    </>
  );
};

export default IndexSubtitle;
