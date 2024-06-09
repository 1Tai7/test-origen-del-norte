/* eslint-disable react-hooks/exhaustive-deps */
import "./../../ques.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import iconTest from "./../../assets/icon-pelo-test.svg";
import dyedOrBleached from "./../../assets/decolorado.svg";
import curlyOrStraightened from "./../../assets/quimico.svg";
import ironOrDryer from "./../../assets/secador.svg";
import noChemical from "./../../assets/quimicos-ninguno.svg";

const SixthQues = () => {
  const [dyedOrBleachedOption, setDyedOrBleachedOption] = useState("");
  const [curlyOrStraightenedOption, setCurlyOrStraightenedOption] =
    useState("");
  const [ironOrDryerOption, setIronOrDryerOption] = useState("");
  const [noChemicalOption, setNoChemicalOption] = useState("");

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/seventh-ques");
  };
  useEffect(() => {
    if (
      dyedOrBleachedOption !== "" &&
      curlyOrStraightenedOption !== "" &&
      ironOrDryerOption !== "" &&
      noChemicalOption !== ""
    ) {
      handleClick();
    }
    return () => {};
  }, [
    dyedOrBleachedOption,
    curlyOrStraightenedOption,
    ironOrDryerOption,
    noChemicalOption,
  ]);

  return (
    <form id="form-one">
      <div className="title-ques-container">
        <div className="img">
          <img src={iconTest} alt="icon-test-hair" />
        </div>
        <h2>6. ¿Te practicas algún proceso químico o de calor?</h2>
      </div>
      <figure>
        <div>
          <h2>1</h2>
          <img src={dyedOrBleached} alt="img-cold-weather" />
        </div>
        <div>
          <h2>2</h2>
          <img src={curlyOrStraightened} alt="img-tropical-weather" />
        </div>
        <div>
          <h2>3</h2>
          <img src={ironOrDryer} alt="img-desert-weather" />
        </div>
        <div>
          <h2>4</h2>
          <img src={noChemical} alt="img-jungle-weather" />
        </div>
      </figure>
      <div className="answer-container">
        <div className="line"></div>
        <div className="btn-container">
          <button
            type="button"
            onClick={() =>
              setDyedOrBleachedOption({
                ques: "6. ¿Te practicas algún proceso químico o de calor?",
                answ: "Tinturado y decolorado",
              })
            }
          >
            <span>1</span> Tinturado y decolorado
          </button>
          <button
            type="button"
            onClick={() =>
              setCurlyOrStraightenedOption({
                ques: "6. ¿Te practicas algún proceso químico o de calor?",
                answ: "Alisado o rizado quimicos",
              })
            }
          >
            <span>2</span> Alisado o rizado quimicos
          </button>
          <button
            type="button"
            onClick={() =>
              setIronOrDryerOption({
                ques: "6. ¿Te practicas algún proceso químico o de calor?",
                answ: "Plancha o secador",
              })
            }
          >
            <span>3</span> Plancha o secador
          </button>
          <button
            type="button"
            onClick={() =>
              setNoChemicalOption({
                ques: "6. ¿Te practicas algún proceso químico o de calor?",
                answ: "Ninguno",
              })
            }
          >
            <span>4</span> Ninguno
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
export default SixthQues;
