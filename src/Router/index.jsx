import { createBrowserRouter } from "react-router-dom";
import StartForm from "../components/startForm/startForm";
import FirstQues from "../components/firstQues/firstQues";
import SecondQues from "../components/secondQues/seconQues";
import ThirdQues from "../components/thirdQues/thirdQues";
import FourthQues from "../components/fourthQues/fourthQues";
import FifthQues from "../components/fifthQues/fifthQues";
import SixthQues from "../components/sixthQues/sixthQues";
import SeventhQues from "../components/seventhQues/seventhQues";
import EighthQues from "../components/eighthQues/eighthQues";
import NinthQues from "../components/ninthQues/ninthQues";
import TenthQues from "../components/tenthQues/tenthQues";
import EleventhQues from "../components/eleventhQues/eleventhQues";
import TwelfthQues from "../components/twelfthQues/twelfthQues";
import ThirdteenthQues from "../components/thirteenthQues/thirteenthQues";
import FourteenthQues from "../components/fourteenthQues/fourteenthQues";

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
  {
    path: "/eighth-ques",
    element: <EighthQues />,
  },
  {
    path: "/ninth-ques",
    element: <NinthQues />,
  },
  {
    path: "/tenth-ques",
    element: <TenthQues />,
  },
  {
    path: "/eleventh-ques",
    element: <EleventhQues />,
  },
  {
    path: "/twelfth-ques",
    element: <TwelfthQues />,
  },
  {
    path: "/thirteenth-ques",
    element: <ThirdteenthQues />,
  },
  {
    path: "/fourteenth-ques",
    element: <FourteenthQues />,
  },
]);
