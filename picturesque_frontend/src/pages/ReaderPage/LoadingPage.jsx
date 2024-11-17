import styles from './LoadingPage.module.css';
import loadingImage from './loading.png';

const LoadingPage = () => {
    return (
        <div className={styles['loading-container']}>
            <img src={loadingImage} alt="Loading" className={styles['loading-spinner']} />
            <p className={styles['loading-text']}>Picturing your pages...</p>
        </div>
    );
};

export default LoadingPage;