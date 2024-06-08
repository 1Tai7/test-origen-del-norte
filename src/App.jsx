//import { useState } from 'react'
import "./App.css";
import FifthQues from "./components/fifthQues/fifthQues";
import FirstQues from "./components/firstQues/firstQues";
import FourthQues from "./components/fourthQues/fourthQues";
import SecondQues from "./components/secondQues/seconQues";
import SeventhQues from "./components/seventhQues/seventhQues";
import SixthQues from "./components/sixthQues/sixthQues";
import StartForm from "./components/startForm/startForm";
import ThirdQues from "./components/thirdQues/thirdQues";

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
    
      </section>
    </>
  );
};

export default App;
