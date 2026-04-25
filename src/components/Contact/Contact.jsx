import React, { useState } from 'react';
import { Mail, Copy, CheckCircle } from 'lucide-react';

const LinkedinIcon = ({ size }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import styles from './Contact.module.css';

export default function Contact({ settings, language }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(settings.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLinkedinClick = (e) => {
    e.preventDefault();
    
    const confirmMessage = language === 'en' 
      ? 'Do you want to leave this page and open LinkedIn?' 
      : '현재 페이지를 벗어나 링크드인으로 이동하시겠습니까?';
      
    if (window.confirm(confirmMessage)) {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (isMobile) {
        // Attempt to open LinkedIn app
        window.location.href = `linkedin://`;
        setTimeout(() => {
          window.open(settings.linkedin, '_blank');
        }, 500);
      } else {
        window.open(settings.linkedin, '_blank');
      }
    }
  };

  return (
    <section className={`section section-secondary ${styles.contact}`} id="contact">
      <div className={`container ${styles.contactContainer}`}>
        <h2 className={`reveal ${styles.sectionTitle}`}>
          {language === 'en' ? 'Let\'s Connect' : '문의하기'}
        </h2>
        <p className={`reveal stagger-1 ${styles.subtitle}`}>
          {language === 'en' ? 'Feel free to reach out to me via email or LinkedIn.' : '이메일이나 링크드인을 통해 자유롭게 연락해 주세요.'}
        </p>

        <div className={styles.links}>
          <button className={`reveal stagger-2 ${styles.contactCard}`} onClick={copyEmail}>
            <div className={styles.iconWrapper}>
              <Mail size={24} />
            </div>
            <div className={styles.cardInfo}>
              <span className={styles.cardLabel}>Email</span>
              <span className={styles.cardValue}>{settings.email}</span>
            </div>
            <div className={styles.actionIcon}>
              {copied ? <CheckCircle size={20} className={styles.successColor} /> : <Copy size={20} />}
            </div>
          </button>

          <a href={settings.linkedin} className={`reveal stagger-3 ${styles.contactCard}`} onClick={handleLinkedinClick}>
            <div className={styles.iconWrapper}>
              <LinkedinIcon size={24} />
            </div>
            <div className={styles.cardInfo}>
              <span className={styles.cardLabel}>LinkedIn</span>
              <span className={styles.cardValue}>Connect with me</span>
            </div>
          </a>
        </div>
      </div>
      
      {copied && (
        <div className={styles.toast}>
          {language === 'en' ? 'Copied to clipboard!' : '클립보드에 복사되었습니다!'}
        </div>
      )}
    </section>
  );
}
