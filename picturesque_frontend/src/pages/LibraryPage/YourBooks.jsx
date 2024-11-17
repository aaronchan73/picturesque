import { useSelector } from "react-redux";
import { selectAllBooks } from "../../redux/slices/bookSlice";
import BookCard from "../../components/book/BookCard";
import image from "../../assets/OPS/cover.jpg";

const YourBooks = () => {
  const books = useSelector(selectAllBooks);
  if (books.length === 0) {
    return (
      <div style={{ width: "1000px", maxWidth: "1200px", margin: "0 auto" }}>
        <h5 className="py-5">Your Books</h5>
        <div className="text-center">
          <p className="fs-5 text-muted">You have no uploaded books</p>
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ width: "1000px", maxWidth: "1200px", margin: "0 auto" }}>
        <h5 className="py-5">Your Books</h5>
        <div className="row mb-4">
          <div className="col-3">
            <BookCard imageUrl={image} />
          </div>
          <div className="col-3"></div>
          <div className="col-3"></div>
          <div className="col-3"></div>
        </div>
      </div>
    );
  }
};

export default YourBooks;
