/* eslint-disable react-hooks/exhaustive-deps */
import "./../../ques.css"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import iconTest from "./../../assets/icon-pelo-test.svg";
import hairStraight from "./../../assets/pelo-liso.svg";
import hairWavy from "./../../assets/pelo-ondulado.svg";
import hairCurly from "./../../assets/pelo-rizado.svg";
import hairAfro from "./../../assets/pelo-afro.svg";

const FirstQues = () => {
  const [straightOption, setStraightOption] = useState("");
  const [wavyOption, setWavyOption] = useState("");
  const [curlyOption, setCurlyOption] = useState("");
  const [afroOption, setAfroOption] = useState("");

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/second-ques");
  };
  useEffect(() => {
    if (
      straightOption !== "" &&
      wavyOption !== "" &&
      curlyOption !== "" &&
      afroOption !== ""
    ) {
      handleClick();
    }
    return () => {};
  }, [straightOption, wavyOption, curlyOption, afroOption]);

  return (
    <form id="form-one">
      <div className="title-ques-container">
        <div className="img">
          <img src={iconTest} alt="icon-test-hair" />
        </div>
        <h2>1. Que tipo de cabello tienes?</h2>
      </div>
      <figure>
        <div>
          <h2>1</h2>
          <img src={hairStraight} alt="img-hair-straight" />
        </div>
        <div>
          <h2>2</h2>
          <img src={hairWavy} alt="img-hair-wavy" />
        </div>
        <div>
          <h2>3</h2>
          <img src={hairCurly} alt="img-hair-curly" />
        </div>
        <div>
          <h2>4</h2>
          <img src={hairAfro} alt="img-hair-afro" />
        </div>
      </figure>
      <div className="answer-container">
        <div className="line"></div>
        <div className="btn-container">
          <button type="button" onClick={() => setStraightOption("liso")}>
            <span>1</span> LISO
          </button>
          <button type="button" onClick={() => setWavyOption("ondulado")}>
            <span>2</span> ONDULADO
          </button>
          <button type="button" onClick={() => setCurlyOption("rizado")}>
            <span>3</span> RIZADO
          </button>
          <button type="button" onClick={() => setAfroOption("afro")}>
            <span>4</span> AFRO
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
export default FirstQues;
