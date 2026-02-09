import { useRoutes } from "react-router-dom";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./routes";

const Pages = () => {
  const accessToken = localStorage.getItem("accessToken");

  // return useRoutes(accessToken ? PRIVATE_ROUTES : PUBLIC_ROUTES);
  return useRoutes(PRIVATE_ROUTES);
};

export default Pages;
