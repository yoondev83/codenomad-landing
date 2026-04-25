import React from 'react';
import styles from './WhyCodeNomad.module.css';

const WhyCodeNomad = ({ data, language }) => {
  return (
    <section id="why" className={`section ${styles.whySection} reveal`}>
      <div className={`container ${styles.whyContainer}`}>
        <h2 className="section-title">
          {language === 'en' ? data.titleEn : data.titleKo}
        </h2>
        
        <div className={styles.featuresGrid}>
          {data.features.map((feature) => (
            <div key={feature.id} className={styles.featureCard}>
              <div className={styles.imageContainer}>
                <img 
                  src={feature.image} 
                  alt={language === 'en' ? feature.titleEn : feature.titleKo} 
                  className={styles.featureImage}
                />
              </div>
              <h3 className={styles.featureTitle}>
                {language === 'en' ? feature.titleEn : feature.titleKo}
              </h3>
              <p className={styles.featureDesc}>
                {language === 'en' ? feature.descEn : feature.descKo}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCodeNomad;
