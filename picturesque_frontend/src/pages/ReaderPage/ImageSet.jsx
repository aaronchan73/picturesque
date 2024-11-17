import styles from "./ImageSet.module.css";

const ImageSet = ({ mainImageUrl, thumbnailUrls }) => {
  return (
    <div className={styles.imageSetContainer}>
      <div className={styles.mainImageContainer}>
        <img src={mainImageUrl} alt="Main view" className={styles.mainImage} />
      </div>

      <div className={styles.thumbnailRow}>
        {thumbnailUrls.map((url, index) => (
          <div key={index} className={styles.thumbnail}>
            <img
              src={url}
              alt={`Thumbnail ${index + 1}`}
              className={styles.thumbnailImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSet;
