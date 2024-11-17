import { useNavigate } from 'react-router';
import styles from './BookCard.module.css';

const BookCard = ({ imageUrl, size = "medium" }) => {
  const sizeStyles = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large
  };
  const navigate = useNavigate();
  return (
    <div className={`${styles.bookCard} ${sizeStyles[size]}`}>
      <img
        src={imageUrl}
        alt="Book cover"
        className={styles.bookImage}
        onClick={() => navigate('/reader', { replace: true })}
      />
    </div>
  );
};

export default BookCard;