import { createBrowserRouter } from "react-router-dom";
import OrganizationStats from "../components/Chart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <OrganizationStats />,
  },
]);
export default router;
