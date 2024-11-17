import { useRoutes } from "react-router";
import Library from "../pages/LibraryPage/Library";
import Landing from "../pages/Landing";
import ReaderPage from "../pages/ReaderPage/ReaderPage";

const Router = () => {
  return useRoutes([
    { path: "/library", element: <Library /> },
    { path: "/", element: <Landing />},
    { path: "/reader", element: <ReaderPage />}
  ]);
};

export default Router;
