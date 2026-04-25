import React, { useState } from 'react';
import styles from './Projects.module.css';
import ProjectModal from '../ProjectModal/ProjectModal';

export default function Projects({ projects, language }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className={`section ${styles.projects}`} id="projects">
      <div className={`container`}>
        <h2 className={`reveal ${styles.sectionTitle}`}>
          {language === 'en' ? 'Featured Projects' : '주요 프로젝트'}
        </h2>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`reveal stagger-${(index % 5) + 1} ${styles.card}`}
              onClick={() => openModal(project)}
            >
              <div className={styles.imageWrapper}>
                <img src={project.imageUrl} alt={project.name} className={styles.image} />
              </div>
              <div className={styles.content}>
                <div className={styles.meta}>
                  <span className={styles.client}>{project.client}</span>
                  <span className={styles.period}>{project.period}</span>
                </div>
                <h3 className={styles.title}>{project.name}</h3>
                <p className={styles.description}>
                  {language === 'en' ? project.descEn : project.descKo}
                </p>
                <div className={styles.tags}>
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          language={language} 
          onClose={closeModal} 
        />
      )}
    </section>
  );
}
