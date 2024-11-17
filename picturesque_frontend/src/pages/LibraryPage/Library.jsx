import { strings } from "../../const/strings";
import styles from "./Library.module.css";
import PageLayout from "../../components/common/PageLayout/PageLayout";
import BookCard from "../../components/book/BookCard";
import BookShelf from "./Bookshelf";

const Library = () => {
  return (
    <PageLayout title={strings.library.libHeader}>
      <div className={styles.libraryWrapper}>
        <div className={styles.shelfBackground}>
          <div className="col d-flex justify-content-end">
            <div className="px-5 d-flex flex-row gap-5 align-items-end">
              <BookCard
                imageUrl={
                  "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
                }
                size="medium"
              />
              <BookCard
                imageUrl={
                  "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
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
        <BookShelf title={"Your Books"} rows={3}/>
      </div>
      <div className={styles.bookshelfWrapper}>
        <BookShelf title={"Completed Books"} rows={1}/>
      </div>
    </PageLayout>
  );
};

export default Library;
