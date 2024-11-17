import BookCard from "../../components/book/BookCard";

const BookShelf = ({ title, rows }) => {
  return (
    <div style={{ width: "1000px", maxWidth: "1200px", margin: "0 auto" }}>
      <h5 className="py-5">{title}</h5>
      {[...Array(rows)].map((_, index) => (
        <div key={index} className="row mb-4">
          <div className="col-3">
            <BookCard
              imageUrl={
                "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781786645456/edgar-allan-poe-short-stories-9781786645456_lg.jpg"
              }
            />
          </div>
          <div className="col-3">
            <BookCard
              imageUrl={
                "https://m.media-amazon.com/images/I/41xDqGkBQ2L._SL500_.jpg"
              }
            />
          </div>
          <div className="col-3">
            <BookCard
              imageUrl={"https://m.media-amazon.com/images/I/716MU3GOvJL.jpg"}
            />
          </div>
          <div className="col-3">
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookShelf;
