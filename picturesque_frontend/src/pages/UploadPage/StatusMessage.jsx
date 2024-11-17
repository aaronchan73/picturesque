import React from "react";
import styles from "./StatusMessage.module.css";
import successImage from "../../assets/success.png";
import processImage from "../../assets/processing.png";
import { useNavigate } from "react-router-dom";

const StatusMessage = ({ status, onBack }) => {
  const navigate = useNavigate();
  const messages = {
    picturing: "Animation artist hard at work",
    error: "Error: Please try again",
    success: "All Set!"
  };

  return (
    <div className={styles.statusContainer}>
      {status === "picturing" && (
        <>
          <img 
            src={processImage} 
            alt="Artist drawing"
            className={styles.illustration}
          />
          <p className={styles.message}>
            {messages[status]}
            <span className={styles.loadingDots}></span>
          </p>
        </>
      )}
      
      {status === "error" && (
        <>
          <p className={styles.message}>{messages[status]}</p>
          <button onClick={onBack} className={styles.backButton}>
            Back
          </button>
        </>
      )}
      {status === "success" && (
        <>
          <img 
            src={successImage} 
            alt="Artist drawing"
            className={styles.illustration}
          />
          <p className={styles.message}>{messages[status]}</p>
          <button 
            className={styles.libraryButton}
            onClick={() => navigate('/', { replace: true })}
          >
            Back to Library
          </button>
        </>
      )}
    </div>
  );
};

export default StatusMessage;