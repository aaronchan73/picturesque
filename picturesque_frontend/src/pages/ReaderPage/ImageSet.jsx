import styles from "./ImageSet.module.css";
import loading from "../../assets/loading.png";

const ImageSet = ({ mainImageUrl, isLoading }) => {
  if (isLoading) {
    return (
      <div className={styles.imageSetContainer}>
        <div className={`${styles.mainImageContainer} ${styles.loading}`}>
          <img 
            src={loading} 
            alt="Loading"
            className={styles.loadingImage}
          />
          <p className={styles.loadingText}>
            Painting your scene
            <span className={styles.loadingDots}></span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.imageSetContainer}>
      <div className={styles.mainImageContainer}>
        <img src={mainImageUrl} alt="Main view" className={styles.mainImage} />
      </div>
    </div>
  );
};

export default ImageSet;