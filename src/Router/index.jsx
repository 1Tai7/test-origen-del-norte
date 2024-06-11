import { createBrowserRouter } from "react-router-dom";
import FirstQues from "../components/firstQues/firstQues";
import SecondQues from "../components/secondQues/seconQues";
import ThirdQues from "../components/thirdQues/thirdQues";
import FourthQues from "../components/fourthQues/fourthQues";
import FifthQues from "../components/fifthQues/fifthQues";
import SixthQues from "../components/sixthQues/sixthQues";
import SeventhQues from "../components/seventhQues/seventhQues";
import StartTest from "../components/startTest/startTest";
import DownloadResult from "../components/downloadResult/downloadResult";

export const router = createBrowserRouter([
  {
    path: "/start-test",
    element: <StartTest />,
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
  {
    path: "/download-result",
    element: <DownloadResult/>
  },
]);
