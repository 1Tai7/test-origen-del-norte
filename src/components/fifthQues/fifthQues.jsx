/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import "./fifthQues.css";
import { useNavigate } from "react-router-dom";

const FifthQues = () => {
  const [fattyOption, setFattyOption] = useState("");
  const [dryOption, setDryOption] = useState("");
  const [itchOption, setItchOption] = useState("");
  const [dandruffOption, setDandruffOption] = useState("");
  const [scaleOption, setScaleOption] = useState("");
  const [normalOption, setNormalOption] = useState("");

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/sixth-ques");
  };
  useEffect(() => {
    if (
      fattyOption !== "" &&
      dryOption !== "" &&
      itchOption !== "" &&
      dandruffOption !== "" &&
      scaleOption !== "" &&
      normalOption !== ""
    ) {
      handleClick();
    }
    return () => {};
  }, [
    fattyOption,
    dryOption,
    itchOption,
    dandruffOption,
    scaleOption,
    normalOption,
  ]);

  return (
    <form>
      <h2>¿Cómo es tu cuero cabelludo?</h2>
      <h3>Selecciona todas las opciones con las que te identificas</h3>

      <div className="hair-type-btn">
        <button type="button" onClick={() => setFattyOption("graso")}>
          Graso
        </button>
        <button type="button" onClick={() => setDryOption("seco")}>
          Seco
        </button>
        <button type="button" onClick={() => setItchOption("piquiña")}>
          Con piquiña
        </button>
        <button type="button" onClick={() => setDandruffOption("caspa")}>
          Con caspa
        </button>
        <button type="button" onClick={() => setScaleOption("escamas")}>
          Con escamas
        </button>
        <button type="button" onClick={() => setNormalOption("normal")}>
          Normal
        </button>
      </div>
      <div className="next-btn">
        <button type="button" onClick={() => handleClick()}>
          Siguiente
        </button>
      </div>
    </form>
  );
};
export default FifthQues;
