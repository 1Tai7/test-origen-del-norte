/* eslint-disable react-hooks/exhaustive-deps */
import "./../../ques.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import iconTest from "./../../assets/icon-pelo-test.svg";
import dandruff from "./../../assets/caspa.svg";
import fungus from "./../../assets/hongos.svg";
import alopecia from "./../../assets/alopecia.svg";
import noDisease from "./../../assets/enfermedad-ninguna.svg";

const SeventhQues = () => {
  const [dandruffOption, setDandruffOption] = useState("");
  const [fungusOption, setFungusOption] = useState("");
  const [alopeciaOption, setAlopeciaOption] = useState("");
  const [noDiseaseOption, setNoDiseaseOption] = useState("");

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  useEffect(() => {
    if (
      dandruffOption !== "" &&
      fungusOption !== "" &&
      alopeciaOption !== "" &&
      noDiseaseOption !== ""
    ) {
      handleClick();
    }
    return () => {};
  }, [dandruffOption, fungusOption, alopeciaOption, noDiseaseOption]);

  return (
    <form id="form-one">
      <div className="title-ques-container">
        <div className="img">
          <img src={iconTest} alt="icon-test-hair" />
        </div>
        <h2>7. ¿Tienes alguna de estas enfermedades capilares?</h2>
      </div>
      <figure>
        <div>
          <h2>1</h2>
          <img src={dandruff} alt="img-danfruff" />
        </div>
        <div>
          <h2>2</h2>
          <img src={fungus} alt="img-fungus" />
        </div>
        <div>
          <h2>3</h2>
          <img src={alopecia} alt="img-alopecia" />
        </div>
        <div>
          <h2>4</h2>
          <img src={noDisease} alt="img-no-disease" />
        </div>
      </figure>
      <div className="answer-container">
        <div className="line"></div>
        <div className="btn-container">
          <button
            type="button"
            onClick={() =>
              setDandruffOption({
                ques: "7. ¿Tienes alguna de estas enfermedades capilares?",
                answ: "Caspa (Dermatitis seborreica)",
              })
            }
          >
            <span>1</span> Caspa (Dermatitis seborreica)
          </button>
          <button
            type="button"
            onClick={() =>
              setFungusOption({
                ques: "7. ¿Tienes alguna de estas enfermedades capilares?",
                answ: "Hongos (Micosis capilar)",
              })
            }
          >
            <span>2</span> Hongos (Micosis capilar)
          </button>
          <button
            type="button"
            onClick={() =>
              setAlopeciaOption({
                ques: "7. ¿Tienes alguna de estas enfermedades capilares?",
                answ: "Alopecia (Alopecia areatada)",
              })
            }
          >
            <span>3</span> Alopecia (Alopecia areatada)
          </button>
          <button
            type="button"
            onClick={() =>
              setNoDiseaseOption({
                ques: "7. ¿Tienes alguna de estas enfermedades capilares?",
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
export default SeventhQues;
