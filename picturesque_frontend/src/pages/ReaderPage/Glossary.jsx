import React, { useState } from 'react';
import styles from './Glossary.module.css';
import { useNavigate } from 'react-router';

const Glossary = () => {
  const [activeChapter, setActiveChapter] = useState(1);
    const navigate = useNavigate();
  const chapters = [1, 2, 3, 4, 5, 6];

  return (
    <div className={styles.container}>
      <div className={styles.backButton} onClick={() => navigate('/', { replace: true })}>
        &#x2190; to Library
      </div>
      <div className={styles.chapterList}>
        {chapters.map((chapter) => (
          <div
            key={chapter}
            className={`${styles.chapter} ${activeChapter === chapter ? styles.active : ''}`}
            onClick={() => setActiveChapter(chapter)}
          >
            Chapter {chapter}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Glossary;
