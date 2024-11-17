import BookCard from "../../components/book/BookCard";

const BookShelf = ({ title, rows }) => {
  
  return (
    <div style={{width: "1000px", maxWidth: "1200px", margin: "0 auto"}}>
      <h5 className="py-5">{title}</h5>
      {[...Array(rows)].map((_, index) => (
        <div key={index} className="row mb-4">
          <div className="col-3">
            <BookCard imageUrl={"https://picsum.photos/200/300?grayscale"} />
          </div>
          <div className="col-3">
            <BookCard imageUrl={"https://picsum.photos/200/300?grayscale"} />
          </div>
          <div className="col-3">
            <BookCard imageUrl={"https://picsum.photos/200/300?grayscale"} />
          </div>
          <div className="col-3">
            <BookCard imageUrl={"https://picsum.photos/200/300?grayscale"} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookShelf;
