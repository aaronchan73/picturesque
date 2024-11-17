import Header from "../Header/Header";
import styles from "./PageLayout.module.css";

const PageLayout = ({ title, children }) => {
  return (
    <div className="container">
      <Header />
      {title === null ? null : <h5 className={`${styles.title} text-center my-4 pb-5`}>{title}</h5>}
      {children}
    </div>
  );
};

export default PageLayout;
