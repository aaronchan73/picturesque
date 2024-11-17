import PageLayout from "../../components/common/PageLayout/PageLayout";
import ImageSet from "./ImageSet";
import Glossary from "./Glossary";
import BookPage from "./BookPage";
import { useState, useEffect } from "react";
import LeftArrow from "../../assets/leftarrow.png";
import RightArrow from "../../assets/rightarrow.png";
import { useQuery } from "@tanstack/react-query";
import styles from "./ReaderPage.module.css";

const fetchPageData = async (page) => {
  const response = await fetch(`http://localhost:5000/image/${page}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const ReaderPage = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ["page", page],
    queryFn: () => fetchPageData(page),
  });

  return (
    <PageLayout title={null}>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-6">
          <header className={styles.bookHeader}>
            <div className={styles.titleSection}>
              <h1>{"Charlie and the Chocolate Factory"}</h1>
              <span className={styles.chapterTitle}>Chapter 1</span>
            </div>
          </header>
        </div>
        <div className="col-4"></div>
      </div>
      <div className="row">
        <div className="col-2">
          <Glossary />
        </div>
        <div className="col-6">
          <BookPage
            text={data?.text}
            title={"Charlie and the Chocolate Factory"}
            isLoading={isLoading}
            page={page}
          />
        </div>
        <div className="col-4">
          <ImageSet
            mainImageUrl={data?.image}
            isLoading={isLoading}
          />
          <br />
          <button
            style={{ border: "none", background: "none" }}
            onClick={() => setPage(page - 1)}
            disabled={page <= 1 || isLoading}
          >
            <img src={LeftArrow} alt="Previous Page" />
          </button>
          <button
            style={{ border: "none", background: "none" }}
            onClick={() => setPage(page + 1)}
            disabled={isLoading}
          >
            <img src={RightArrow} alt="Next Page" />
          </button>
        </div>
      </div>
      <div className="py-3" />
    </PageLayout>
  );
};

export default ReaderPage;
