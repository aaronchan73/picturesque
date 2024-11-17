import { useRoutes } from "react-router";
import Library from "../pages/LibraryPage/Library";
import ReaderPage from "../pages/ReaderPage/ReaderPage";
import UploadPage from "../pages/UploadPage/UploadPage";

const Router = () => {
  return useRoutes([
    { path: "/", element: <Library />},
    { path: "/reader", element: <ReaderPage />},
    { path: "/upload", element: <UploadPage />}
  ]);
};

export default Router;
