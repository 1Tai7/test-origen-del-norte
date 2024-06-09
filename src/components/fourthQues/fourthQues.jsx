/* eslint-disable react-hooks/exhaustive-deps */
import "./../../ques.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import iconTest from "./../../assets/icon-pelo-test.svg";
import coldWeather from "./../../assets/clima-frio.svg";
import tropicalWeather from "./../../assets/clima-tropical.svg";
import desertWeather from "./../../assets/clima-desierto.svg";
import jungleWeather from "./../../assets/clima-selva.svg";

const FourthQues = () => {
  const [coldOption, setColdOption] = useState("");
  const [tropicalOption, setTropicalOption] = useState("");
  const [desertOption, setDesertOption] = useState("");
  const [jungleOption, setJungleOption] = useState("");

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/fifth-ques");
  };
  useEffect(() => {
    if (
      coldOption !== "" &&
      tropicalOption !== "" &&
      desertOption !== "" &&
      jungleOption !== ""
    ) {
      handleClick();
    }
    return () => {};
  }, [coldOption, tropicalOption, desertOption, jungleOption]);

  return (
    <form id="form-one">
      <div className="title-ques-container">
        <div className="img">
          <img src={iconTest} alt="icon-test-hair" />
        </div>
        <h2>4. ¿En que clima vives?</h2>
      </div>
      <figure>
        <div>
          <h2>1</h2>
          <img src={coldWeather} alt="img-cold-weather" />
        </div>
        <div>
          <h2>2</h2>
          <img src={tropicalWeather} alt="img-tropical-weather" />
        </div>
        <div>
          <h2>3</h2>
          <img src={desertWeather} alt="img-desert-weather" />
        </div>
        <div>
          <h2>4</h2>
          <img src={jungleWeather} alt="img-jungle-weather" />
        </div>
      </figure>
      <div className="answer-container">
        <div className="line"></div>
        <div className="btn-container">
          <button
            type="button"
            onClick={() =>
              setColdOption({ ques: "4. ¿En que clima vives?", answ: "frio" })
            }
          >
            <span>1</span> FRIO
          </button>
          <button
            type="button"
            onClick={() =>
              setTropicalOption({
                ques: "4. ¿En que clima vives?",
                answ: "tropical",
              })
            }
          >
            <span>2</span> TROPICAL
          </button>
          <button
            type="button"
            onClick={() =>
              setDesertOption({
                ques: "4. ¿En que clima vives?",
                answ: "desierto",
              })
            }
          >
            <span>3</span> DESIERTO
          </button>
          <button
            type="button"
            onClick={() =>
              setJungleOption({
                ques: "4. ¿En que clima vives?",
                answ: "selva",
              })
            }
          >
            <span>4</span> SELVA
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
export default FourthQues;
