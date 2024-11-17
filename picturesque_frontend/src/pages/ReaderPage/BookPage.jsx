import styles from './BookPage.module.css';

const ReadingPage = ({ text }) => {
  return (
    <div className={styles.readerContainer}>
      <header className={styles.bookHeader}>
        <div className={styles.titleSection}>
          <h1>Book Title Example</h1>
          <span className={styles.chapterTitle}>Chapter 1</span>
        </div>
      </header>
      
      <main className={styles.pageContent}>
        <p>{text}</p>

        {/* <div className={styles.chapter}>
          <h2>Chapter 1</h2>
          
          <h3>Dummy Text Example</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum, purus eget dapibus venenatis, tortor neque faucibus odio, eget dictum quam eros id sapien.</p>
          
          <h3>Subheading</h3>
          <p>Integer volutpat justo ut nulla eleifend, ut vestibulum metus malesuada. Fusce suscipit, mi quis volutpat pretium, libero mi ornare mauris, vel fermentum augue turpis non velit.</p>
          
          <ul>
            <li>Praesent nec leo vestibulum, placerat sem at, pharetra mi.</li>
            <li>Nulla facilisi. Vestibulum eget felis nec magna ultricies gravida.</li>
            <li>Morbi sodales, quam nec consectetur viverra, eros ex vestibulum ante, in blandit nisi arcu vel turpis.</li>
          </ul>
          
          <h3>Another Subheading</h3>
          <p>Nam cursus efficitur nunc non interdum. Nam non massa mauris. Nulla facilisi.</p>
        </div> */}
        
        <div className={styles.pageNumber}>5</div>
      </main>
    </div>
  );
};

export default ReadingPage;