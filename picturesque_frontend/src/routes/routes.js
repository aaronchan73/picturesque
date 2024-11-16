import { useRoutes } from "react-router";
import { Library } from "../pages/Library";

const Router = () => {
  return useRoutes([{ path: "/library", element: <Library /> }]);
};

export default Router;
