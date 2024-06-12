/* eslint-disable react-hooks/exhaustive-deps */
import "./../../ques.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import iconTest from "./../../assets/icon-pelo-test.svg";
import gymActivity from "./../../assets/gym.svg";
import anySportActivity from "./../../assets/algun-deporte.svg";
import walkActivity from "./../../assets/caminar.svg";

const FifthQues = () => {
  const [gymOption, setGymOption] = useState("");
  const [anySportOption, setAnySportOption] = useState("");
  const [walkOption, setWalkOption] = useState("");

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/sixth-ques");
  };
  const handleAnswer = ({ ques, answ }) => {
    setGymOption({
      ques: ques,
      answ: answ,
    });
    localStorage.setItem("respuesta 5", JSON.stringify({ ques, answ }));
    setAnySportOption({
      ques: ques,
      answ: answ,
    });
    localStorage.setItem("respuesta 5", JSON.stringify({ ques, answ }));
    setWalkOption({
      ques: ques,
      answ: answ,
    });
    localStorage.setItem("respuesta 5", JSON.stringify({ ques, answ }));
  };

  useEffect(() => {
    if (gymOption !== "" && anySportOption !== "" && walkOption !== "") {
      handleClick();
    }
    return () => {};
  }, [gymOption, anySportOption, walkOption]);

  return (
    <form id="form-one">
      <section>
        <div className="title-ques-container">
          <div className="img">
            <img src={iconTest} alt="icon-test-hair" />
          </div>
          <h2>5. ¿Cuánta actividad física realizas?</h2>
        </div>
        <figure>
          <div>
            <h2>1</h2>
            <img src={gymActivity} alt="img-gym-activity" />
          </div>
          <div>
            <h2>2</h2>
            <img src={anySportActivity} alt="img-any-sport-activity" />
          </div>
          <div>
            <h2>3</h2>
            <img src={walkActivity} alt="img-walk-activity" />
          </div>
        </figure>
        <div className="answer-container">
          <div className="line"></div>
          <div className="btn-container">
            <button
              type="button"
              onClick={() =>
                handleAnswer({
                  ques: "¿Cuánta actividad física realizas?",
                  answ: "Respuesta: Vas al gimnasio",
                })
              }
            >
              <span>1</span> Vas al gimnasio
            </button>
            <button
              type="button"
              onClick={() =>
                handleAnswer({
                  ques: "¿Cuánta actividad física realizas?",
                  answ: "Respuesta: Practicas algún deporte",
                })
              }
            >
              <span>2</span> Practicas algún deporte
            </button>
            <button
              type="button"
              onClick={() =>
                handleAnswer({
                  ques: "¿Cuánta actividad física realizas?",
                  answ: "Respuesta: Caminas largas distancias",
                })
              }
            >
              <span>3</span> Caminas largas distancias
            </button>
          </div>
          <div className="next-btn">
            <button type="button" onClick={() => handleClick()}>
              SIGUIENTE
            </button>
          </div>
        </div>
      </section>
    </form>
  );
};
export default FifthQues;
