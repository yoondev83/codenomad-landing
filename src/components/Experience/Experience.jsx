import React from 'react';
import styles from './Experience.module.css';

export default function Experience({ experiences, language }) {
  return (
    <section className={`section ${styles.experience}`} id="experience">
      <div className={`container`}>
        <h2 className={`reveal ${styles.sectionTitle}`}>
          {language === 'en' ? 'Work Experience' : '경력'}
        </h2>
        
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={`reveal stagger-${(index % 5) + 1} ${styles.timelineItem}`}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.timePeriod}>
                  {exp.startDate} - {exp.endDate}
                </div>
                <h3 className={styles.companyTitle}>
                  {exp.company}
                </h3>
                <div className={styles.roleSubtitle}>
                  {language === 'en' ? exp.roleEn : exp.roleKo}
                </div>
                <p className={styles.description}>
                  {language === 'en' ? exp.descEn : exp.descKo}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
