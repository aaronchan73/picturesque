import PageLayout from "../../components/common/PageLayout/PageLayout";
import ImageSet from "./ImageSet";
import Glossary from "./Glossary";
import ReadingPage from "./ReadingPage";

const ReaderPage = () => {
  const images = {
    main: "https://picsum.photos/id/237/200/300",
    thumbnails: [
      "https://picsum.photos/200/300/?blur",
      "https://picsum.photos/200/300/?blur",
      "https://picsum.photos/200/300/?blur",
    ],
  };
  return (
    <PageLayout title={null}>
      <div className="row">
        <div className="col-2">
          <Glossary />
        </div>
        <div className="col-6">
          <ReadingPage />
        </div>
        <div className="col-4">
          <ImageSet
            mainImageUrl={images.main}
            thumbnailUrls={images.thumbnails}
          />
        </div>
      </div>
      <div className='py-3' />
    </PageLayout>
  );
};

export default ReaderPage;
