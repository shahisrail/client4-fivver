import { createBrowserRouter } from "react-router-dom";
import Bussness from "../components/Home/Bussness";
import Main from "../layout/Main";
import PersonalAcount from "../pages/PersonalAcount";
import InsureanceNumber from "../pages/InsureanceNumber";
import IncomeText from "../pages/IncomeText";
import IncomeTextHistory from "../pages/IncomeTextHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Bussness />,
      },
      {
        path: "/personal-account",
        element: <PersonalAcount />,
      },
      {
        path: "/save-your-incurance-number",
        element: <InsureanceNumber />,
      },
      {
        path: "/cheak-income-taxt",
        element: <IncomeText />,
      },
      {
        path: "/income-taxt-history",
        element: <IncomeTextHistory />,
      },
    ],
  },
]);
export default router;
