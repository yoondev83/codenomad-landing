import React, { useState, useEffect } from 'react';
import { Moon, Sun, Globe } from 'lucide-react';
import styles from './Header.module.css';

export default function Header({ theme, toggleTheme, language, toggleLanguage }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerContent}`}>
        <div className={styles.logo}>CodeNomad</div>
        <div className={styles.controls}>
          <button onClick={toggleLanguage} className={styles.iconButton} aria-label="Toggle Language">
            <Globe size={20} />
            <span className={styles.langText}>{language === 'en' ? 'EN' : 'KO'}</span>
          </button>
          <button onClick={toggleTheme} className={styles.iconButton} aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
