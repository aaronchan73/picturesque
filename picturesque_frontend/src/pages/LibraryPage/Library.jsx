import { strings } from "../../const/strings";
import styles from "./Library.module.css";
import PageLayout from "../../components/common/PageLayout/PageLayout";
import BookCard from "../../components/book/BookCard";
import BookShelf from "./Bookshelf";
import { useSelector } from "react-redux";
import { selectAllBooks } from "../../redux/slices/bookSlice";
import YourBooks from "./YourBooks";

const Library = () => {
  const books = useSelector(selectAllBooks);
  console.log(books)
  return (
    <PageLayout title={strings.library.libHeader}>
      <div className={styles.libraryWrapper}>
        <div className={styles.shelfBackground}>
          <div className="py-3" />
          <div className="col d-flex justify-content-end">
            <div className="px-5 d-flex flex-row gap-5 align-items-end">
              <BookCard
                imageUrl={
                  "https://m.media-amazon.com/images/I/91KugvH+FwL.jpg"
                }
                size="medium"
              />
              <BookCard
                imageUrl={
                  "https://m.media-amazon.com/images/I/611X8GI7hpL._AC_UF1000,1000_QL80_.jpg"
                }
                size="small"
              />
            </div>
          </div>
          <div className="col">
            <div className="px-5">
              <h3 className={styles.welcome}>{strings.library.welcome}</h3>
              <p style={{ maxWidth: "325px" }}>{strings.library.welcomeBody}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bookshelfWrapper}>
        <YourBooks />
      </div>
      <div className={styles.bookshelfWrapper}>
        <BookShelf title={"Completed Books"} rows={1}/>
      </div>
    </PageLayout>
  );
};

export default Library;
