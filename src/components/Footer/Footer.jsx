import React from 'react';
import styles from './Footer.module.css';

export default function Footer({ language }) {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <p>© {year} CodeNomad. All rights reserved.</p>
      </div>
    </footer>
  );
}
