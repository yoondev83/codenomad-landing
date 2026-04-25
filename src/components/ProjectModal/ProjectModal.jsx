import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import styles from './ProjectModal.module.css';

export default function ProjectModal({ project, language, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>
        
        <div className={styles.imageContainer}>
          <img src={project.imageUrl} alt={project.name} className={styles.image} />
        </div>
        
        <div className={styles.content}>
          <div className={styles.meta}>
            <span className={styles.client}>{project.client}</span>
            <span className={styles.period}>{project.period}</span>
          </div>
          
          <h2 className={styles.title}>{project.name}</h2>
          
          <div className={styles.tags}>
            {project.tags.map((tag, idx) => (
              <span key={idx} className={styles.tag}>{tag}</span>
            ))}
          </div>
          
          <p className={styles.description}>
            {language === 'en' ? project.descEn : project.descKo}
          </p>
        </div>
      </div>
    </div>
  );
}
