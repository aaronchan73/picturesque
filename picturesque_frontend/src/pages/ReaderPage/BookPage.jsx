import styles from './BookPage.module.css';

const BookPage = ({ text, title, isLoading, page }) => {
  if (isLoading) {
    return (
      <div className={styles.readerContainer}>
        <main className={styles.pageContent}>
          <p style={{color: 'grey'}}>The Author is frantically typing<span className={styles.loadingDots}></span></p>
        </main>
      </div>
    );
  }

  return (
    <div className={styles.readerContainer}>
      <main className={styles.pageContent}>
        <p>{text}</p>
        <div className={styles.pageNumber}>{page}</div>
      </main>
    </div>
  );
};

export default BookPage;