import styles from './BookCard.module.css';

const BookCard = ({ imageUrl, size = "medium" }) => {
  const sizeStyles = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large
  };

  return (
    <div className={`${styles.bookCard} ${sizeStyles[size]}`}>
      <img
        src={imageUrl}
        alt="Book cover"
        className={styles.bookImage}
      />
    </div>
  );
};

export default BookCard;