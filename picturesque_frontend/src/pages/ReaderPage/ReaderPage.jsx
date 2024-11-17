import PageLayout from "../../components/common/PageLayout/PageLayout";
import ImageSet from "./ImageSet";
import Glossary from "./Glossary";
import BookPage from "./BookPage";
import { useState, useEffect } from "react";
import LeftArrow from '../../assets/leftarrow.png'
import RightArrow from '../../assets/rightarrow.png'
import { useQuery } from "@tanstack/react-query";

const fetchPageData = async (page) => {
  const response = await fetch(`http://localhost:5000/image/${page}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const ReaderPage = () => {
  const [page, setPage] = useState(1);
  const [previousImages, setPreviousImages] = useState([]);

  const { data, isLoading } = useQuery({
    queryKey: ['page', page],
    queryFn: () => fetchPageData(page),
  });

  return (
    <PageLayout title={null}>
      <div className="row">
        <div className="col-2">
          <Glossary />
        </div>
        <div className="col-6">
          <BookPage 
            text={data?.text} 
            title={"Charlie and the Chocolate Factory"} 
            isLoading={isLoading}
          />
        </div>
        <div className="col-4">
          <ImageSet
            mainImageUrl={data?.image}
            previousImages={previousImages}
            isLoading={isLoading}
          />
          <br />
          <button 
            style={{ border: 'none', background: 'none' }} 
            onClick={() => setPage(page - 1)}
            disabled={page <= 1 || isLoading}
          >
            <img src={LeftArrow} alt="Previous Page" />
          </button>
          <button 
            style={{ border: 'none', background: 'none' }} 
            onClick={() => setPage(page + 1)}
            disabled={isLoading}
          >
            <img src={RightArrow} alt="Next Page" />
          </button>
        </div>
      </div>
      <div className='py-3' />
    </PageLayout>
  );
};

export default ReaderPage;