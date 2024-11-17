import React, { useState } from "react";
import UploadBox from "./UploadBox";
import StatusMessage from "./StatusMessage";
import { uploadToPinata } from "../../utils/pinataService";
import { processEpub } from "../../utils/epubService";
import PageLayout from "../../components/common/PageLayout/PageLayout"
import styles from "./UploadPage.module.css";

const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [status, setStatus] = useState("");

  const handleUpload = async () => {
    if (selectedFile) {
      setStatus("picturing");
      try {
        const response = await uploadToPinata(selectedFile);
        const ipfsHash = response["IpfsHash"];
        await processEpub(ipfsHash);
        setUploadedFile(selectedFile);
        setStatus("success");
      } catch (error) {
        console.error(error);
        setStatus("error");
      }
    }
  };

  const handleBack = () => {
    setStatus("");
    setSelectedFile(null);
    setUploadedFile(null);
  };

  return (
    <PageLayout title={status ? null : "Illustrate a new book!"}>
      <div className={styles.uploadContainer}>
        {status ? (
          <StatusMessage status={status} onBack={handleBack} />
        ) : (
          <div className={styles.uploadContent}>
            <p>Upload an epub file</p>
            <UploadBox
              selectedFile={selectedFile}
              setSelectedFile={setSelectedFile}
              uploadedFile={uploadedFile}
              onUpload={handleUpload}
            />
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default UploadPage;
