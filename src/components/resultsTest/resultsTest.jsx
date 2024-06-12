import { useNavigate } from "react-router-dom";
import QuesAnswer from "./quesAnswer";
import "./resultsTest.css";

const ResultsTest = () => {
  const dataOne = localStorage.getItem("respuesta 1");
  const dataTwo = localStorage.getItem("respuesta 2");
  const dataThree = localStorage.getItem("respuesta 3");
  const dataFour = localStorage.getItem("respuesta 4");
  const dataFive = localStorage.getItem("respuesta 5");
  const dataSix = localStorage.getItem("respuesta 6");
  const dataSeven = localStorage.getItem("respuesta 7");

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/hair-tips");
  };

  return (
    <section className="results-container">
      <div>
        <QuesAnswer
          number={1}
          question={JSON.parse(dataOne).ques}
          answer={JSON.parse(dataOne).answ}
        />
        <QuesAnswer
          number={2}
          question={JSON.parse(dataTwo).ques}
          answer={JSON.parse(dataTwo).answ}
        />{" "}
        <QuesAnswer
          number={3}
          question={JSON.parse(dataThree).ques}
          answer={JSON.parse(dataThree).answ}
        />{" "}
        <QuesAnswer
          number={4}
          question={JSON.parse(dataFour).ques}
          answer={JSON.parse(dataFour).answ}
        />{" "}
        <QuesAnswer
          number={5}
          question={JSON.parse(dataFive).ques}
          answer={JSON.parse(dataFive).answ}
        />{" "}
        <QuesAnswer
          number={6}
          question={JSON.parse(dataSix).ques}
          answer={JSON.parse(dataSix).answ}
        />{" "}
        <QuesAnswer
          number={7}
          question={JSON.parse(dataSeven).ques}
          answer={JSON.parse(dataSeven).answ}
        />
        <div className="tips-button">
          <button type="button" onClick={() => handleClick()}>
            VER RECOMENDACIONES
          </button>
        </div>
      </div>
    </section>
  );
};
export default ResultsTest;
