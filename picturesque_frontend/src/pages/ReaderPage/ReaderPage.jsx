import PageLayout from "../../components/common/PageLayout/PageLayout";
import ImageSet from "./ImageSet";
import Glossary from "./Glossary";
import BookPage from "./BookPage";
import { useState, useEffect } from "react";
import LoadingPage from "./LoadingPage";

const ReaderPage = () => {
  const [main, setMain] = useState("");
  const [thumbnails, setThumbnails] = useState([
    "https://picsum.photos/200/300/?blur",
    "https://picsum.photos/200/300/?blur",
    "https://picsum.photos/200/300/?blur",]
  );
  const [page, setPage] = useState(1);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log(page)
    fetch(`http://localhost:5000/image/${page}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.image)
        setMain(data.image);
        setText(data.text);
        setLoading(false);
      });
  }, [page])
  return (
    <PageLayout title={null}>
      {loading ? <LoadingPage /> :
      <>
        <div className="row">
          <div className="col-2">
            <Glossary />
          </div>
          <div className="col-6">
            <BookPage text={text} />
          </div>
          <div className="col-4">
            <ImageSet
              mainImageUrl={main}
              thumbnailUrls={thumbnails}
            />
            <button onClick={() => {
              setLoading(true)
              setPage(page + 1)}
            }>{">"}
              </button>
          </div>
        </div>
        <div className='py-3' />
      </>}
    </PageLayout>
  );
};

export default ReaderPage;
