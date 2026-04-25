import React from 'react';
import styles from './Hero.module.css';

export default function Hero({ data, language }) {
  const headline = language === 'en' ? data.headlineEn : data.headlineKo;
  const subheadline = language === 'en' ? data.subheadlineEn : data.subheadlineKo;
  
  // Highlight "CodeNomad" in subheadline
  const renderSubheadline = (text) => {
    const parts = text.split(/(CodeNomad)/g);
    return parts.map((part, i) => 
      part === 'CodeNomad' ? <span key={i} className={styles.highlight}>{part}</span> : part
    );
  };

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={`section ${styles.hero}`} id="home">
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.textContent}>
          <h1 className={`reveal ${styles.headline}`}>{headline}</h1>
          <p className={`reveal stagger-1 ${styles.subheadline}`}>
            {renderSubheadline(subheadline)}
          </p>
          
          <div className={styles.certifications}>
            {data.certifications.map((cert, index) => (
              <span key={index} className={`reveal stagger-${(index % 5) + 2} ${styles.certBadge}`}>
                {cert}
              </span>
            ))}
          </div>

          <div className={`reveal stagger-4 ${styles.actions}`}>
            <button className={styles.ctaButton} onClick={scrollToContact}>
              {language === 'en' ? 'Get in Touch' : '문의하기'}
            </button>
          </div>
        </div>
        
        <div className={`reveal stagger-3 ${styles.imageContent}`}>
          <img 
            src="/profile.jpg" 
            alt="Yoonsuk Chang - CodeNomad" 
            className={styles.profileImage}
          />
        </div>
      </div>
    </section>
  );
}
