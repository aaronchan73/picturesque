import styles from './BookPage.module.css';

const BookPage = ({ text, title, isLoading }) => {
  if (isLoading) {
    return (
      <div className={styles.readerContainer}>
        <header className={styles.bookHeader}>
          <div className={styles.titleSection}>
            <h1>{title}</h1>
          </div>
        </header>
        <main className={styles.pageContent}>
          <p style={{color: 'grey'}}>The Author is frantically typing<span className={styles.loadingDots}></span></p>
        </main>
      </div>
    );
  }

  return (
    <div className={styles.readerContainer}>
      <header className={styles.bookHeader}>
        <div className={styles.titleSection}>
          <h1>{title}</h1>
          <span className={styles.chapterTitle}>Chapter 1</span>
        </div>
      </header>
      <main className={styles.pageContent}>
        <p>{text}</p>
        <div className={styles.pageNumber}>5</div>
      </main>
    </div>
  );
};

export default BookPage;