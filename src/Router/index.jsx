import { createBrowserRouter } from "react-router-dom";
import StartForm from "../components/startForm/startForm";
import FirstQues from "../components/firstQues/firstQues";
import SecondQues from "../components/secondQues/seconQues";
import ThirdQues from "../components/thirdQues/thirdQues";
import FourthQues from "../components/fourthQues/fourthQues";
import FifthQues from "../components/fifthQues/fifthQues";
import SixthQues from "../components/sixthQues/sixthQues";
import SeventhQues from "../components/seventhQues/seventhQues";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <StartForm />,
  },
  {
    path: "/first-ques",
    element: <FirstQues />,
  },
  {
    path: "/second-ques",
    element: <SecondQues />,
  },
  {
    path: "/third-ques",
    element: <ThirdQues />,
  },
  {
    path: "/fourth-ques",
    element: <FourthQues />,
  },
  {
    path: "/fifth-ques",
    element: <FifthQues />,
  },
  {
    path: "/sixth-ques",
    element: <SixthQues />,
  },
  {
    path: "/seventh-ques",
    element: <SeventhQues />,
  },
]);
