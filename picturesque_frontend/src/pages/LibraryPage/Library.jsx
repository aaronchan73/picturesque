import { strings } from "../../const/strings";
import styles from "./Library.module.css";
import PageLayout from "../../components/common/PageLayout/PageLayout";
import BookCard from "../../components/book/BookCard";
import BookShelf from "./Bookshelf";
import { useSelector } from "react-redux";
import { selectAllBooks } from "../../redux/slices/bookSlice";
import YourBooks from "./YourBooks";
import Footer from "../../components/common/Footer";

const Library = () => {
  const books = useSelector(selectAllBooks);
  return (
    <PageLayout title={strings.library.libHeader}>
      <div className={`py-5 ${styles.libraryWrapper}`}>
        <div className={styles.shelfBackground}>
          <div className="py-3" />
          <div className="col d-flex justify-content-end">
            <div className="px-5 d-flex flex-row gap-5 align-items-end">
              <BookCard
                imageUrl={"https://m.media-amazon.com/images/I/91KugvH+FwL.jpg"}
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
              <div style={{paddingLeft:'200px'}}>
                <img
                  src="/src/assets/cheer.png"
                  alt="Cheer"
                  style={{
                    width: "50px",
                    marginBottom:'-2px'
                  }}
                />
              </div>
              <h3 className={styles.welcome}>{strings.library.welcome}</h3>
              <p style={{ maxWidth: "280px" }}>{strings.library.welcomeBody}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bookshelfWrapper}>
        <YourBooks />
      </div>
      <div className={styles.bookshelfWrapper}>
        <BookShelf title={"Completed Books"} rows={1} />
      </div>
      <Footer />
    </PageLayout>
  
  );
};

export default Library;
