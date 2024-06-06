//import { useState } from 'react'
import "./App.css";
import EighthQues from "./components/eighthQues/eighthQues";
import EleventhQues from "./components/eleventhQues/eleventhQues";
import FifthQues from "./components/fifthQues/fifthQues";
import FirstQues from "./components/firstQues/firstQues";
import FourteenthQues from "./components/fourteenthQues/fourteenthQues";
import FourthQues from "./components/fourthQues/fourthQues";
import NinthQues from "./components/ninthQues/ninthQues";
import SecondQues from "./components/secondQues/seconQues";
import SeventhQues from "./components/seventhQues/seventhQues";
import SixthQues from "./components/sixthQues/sixthQues";
import StartForm from "./components/startForm/startForm";
import TenthQues from "./components/tenthQues/tenthQues";
import ThirdQues from "./components/thirdQues/thirdQues";
import ThirteenthQues from "./components/thirteenthQues/thirteenthQues";
import TwelfthQues from "./components/twelfthQues/twelfthQues";

const App = () => {
  return (
    <>
      <section className="container">
        <StartForm />
        <FirstQues />
        <SecondQues />
        <ThirdQues />
        <FourthQues />
        <FifthQues />
        <SixthQues />
        <SeventhQues />
        <EighthQues />
        <NinthQues />
        <TenthQues />
        <EleventhQues />
        <TwelfthQues />
        <ThirteenthQues />
        <FourteenthQues />
      </section>
    </>
  );
};

export default App;
