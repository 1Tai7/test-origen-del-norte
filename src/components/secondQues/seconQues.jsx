/* eslint-disable react-hooks/exhaustive-deps */

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import iconTest from "./../../assets/icon-pelo-test.svg";
import lowStrand from "./../../assets/porosidad-baja.svg";
import halfStrand from "./../../assets/porosidad-media.svg";
import highStrand from "./../../assets/porosidad-alta.svg";

const SecondQues = () => {
  const [lowStrandOption, setLowStrandOption] = useState("");
  const [halfStrandOption, setHalfStrandOption] = useState("");
  const [highStrandOption, setHighStrandOption] = useState("");

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/third-ques");
  };
  const handleAnswer = ({ ques, answ }) => {
    setLowStrandOption({
      ques: ques,
      answ: answ,
    });
    localStorage.setItem("respuesta 2", JSON.stringify({ ques, answ }));
    setHalfStrandOption({
      ques: ques,
      answ: answ,
    });
    localStorage.setItem("respuesta 2", JSON.stringify({ ques, answ }));
    setHighStrandOption({
      ques: ques,
      answ: answ,
    });
    localStorage.setItem("respuesta 2", JSON.stringify({ ques, answ }));
  };

  useEffect(() => {
    if (
      lowStrandOption !== "" &&
      halfStrandOption !== "" &&
      highStrandOption !== ""
    ) {
      handleClick();
    }
    return () => {};
  }, [lowStrandOption, halfStrandOption, highStrandOption]);

  return (
    <form id="form-one">
      <div className="title-ques-container">
        <div className="img">
          <img src={iconTest} alt="icon-test-hair" />
        </div>
        <h2 className="ques-two">
          2. ¿Qué tipo de porosidad tiene tus hebras?
        </h2>
      </div>
      <figure>
        <div>
          <h2>1</h2>
          <img src={lowStrand} alt="img-low-strand" />
        </div>
        <div>
          <h2>2</h2>
          <img src={halfStrand} alt="img-half-strand" />
        </div>
        <div>
          <h2>3</h2>
          <img src={highStrand} alt="img-high-strand" />
        </div>
      </figure>
      <div className="answer-container">
        <div className="line"></div>
        <div className="btn-container">
          <button
            type="button"
            onClick={() =>
              handleAnswer({
                ques: "2.¿Qué tipo de porosidad tiene tus hebras?",
                answ: "Respuesta: Baja",
              })
            }
          >
            <span>1</span> BAJA
          </button>
          <button
            type="button"
            onClick={() =>
              handleAnswer({
                ques: "2.¿Qué tipo de porosidad tiene tus hebras?",
                answ: "Respuesta: Media",
              })
            }
          >
            <span>2</span> MEDIA
          </button>
          <button
            type="button"
            onClick={() =>
              handleAnswer({
                ques: "2.¿Qué tipo de porosidad tiene tus hebras?",
                answ: "Respuesta: Alta",
              })
            }
          >
            <span>3</span> ALTA
          </button>
        </div>
        <div className="next-btn">
          <button type="button" onClick={() => handleClick()}>
            SIGUIENTE
          </button>
        </div>
      </div>
    </form>
  );
};
export default SecondQues;
