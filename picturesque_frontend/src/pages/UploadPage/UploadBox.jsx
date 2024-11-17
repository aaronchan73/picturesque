import React, { useRef } from "react";
import styles from "./UploadBox.module.css";
import { useNavigate } from "react-router";

const UploadBox = ({ selectedFile, setSelectedFile, uploadedFile, onUpload }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) setSelectedFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  
  const navigate = useNavigate();

  return (
    <div className={styles.uploadBoxContainer}>
      <div
        className={styles.dropZone}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div className={styles.iconContainer}>
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#187D81" strokeWidth="2">
            <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4" />
            <path d="M17 8l-5-5-5 5" />
            <path d="M12 3v12" />
          </svg>
        </div>
        <div className={styles.dropText}>
          <p>Drag and drop here</p>
          <p>or</p>
          <p className={styles.browseText}>Browse files</p>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className={styles.fileInput}
          accept=".epub"
        />
      </div>

      {selectedFile && (
        <div className={styles.selectedFile}>
          <div className={styles.fileIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#187D81" strokeWidth="2">
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <text x="7" y="16" fill="#187D81" fontSize="8">ePUB</text>
            </svg>
          </div>
          <span>{selectedFile.name}</span>
          <svg 
            className={styles.checkmark} 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#4CAF50" 
            strokeWidth="2"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
      )}

      <p className={styles.acceptedTypes}>Accepted file types: .epub</p>

      <div className={styles.buttonGroup}>
        <button className={styles.cancelButton} onClick={() => navigate('/')}>
          Cancel
        </button>
        <button className={styles.createButton} onClick={onUpload}>
          Create
        </button>
      </div>
    </div>
  );
};

export default UploadBox;