/* eslint-disable react-hooks/exhaustive-deps */

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import iconTest from "./../../assets/icon-pelo-test.svg";
import oiliness from "./../../assets/oleosidad.svg";

const SecondQues = () => {
  const [greasyOption, setGreasyOption] = useState("");
  const [dryOption, setDryOption] = useState("");
  const [mixedOption, setMixedOption] = useState("");

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/fourth-ques");
  };
  useEffect(() => {
    if (greasyOption !== "" && dryOption !== "" && mixedOption !== "") {
      handleClick();
    }
    return () => {};
  }, [greasyOption, dryOption, mixedOption]);

  return (
    <form id="form-one">
      <div className="title-ques-container">
        <div className="img">
          <img src={iconTest} alt="icon-test-hair" />
        </div>

        <h2>3. ¿Qué oleosidad tiene tu cabello?</h2>
      </div>
      <figure>
        <div>
          <img src={oiliness} alt="img-oiliness" />
        </div>
      </figure>
      <div className="answer-container">
        <div className="line"></div>
        <div className="btn-container">
          <button
            type="button"
            onClick={() =>
              setGreasyOption({
                ques: "3. ¿Qué oleosidad tiene tu cabello?",
                answ: "graso",
              })
            }
          >
            <span>1</span> GRASO
          </button>
          <button
            type="button"
            onClick={() =>
              setDryOption({
                ques: "3. ¿Qué oleosidad tiene tu cabello?",
                answ: "seco",
              })
            }
          >
            <span>2</span> SECO
          </button>
          <button
            type="button"
            onClick={() =>
              setMixedOption({
                ques: "3. ¿Qué oleosidad tiene tu cabello?",
                answ: "mixto",
              })
            }
          >
            <span>3</span> MIXTO
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
