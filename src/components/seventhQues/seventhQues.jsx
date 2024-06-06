/* eslint-disable react-hooks/exhaustive-deps */
import "./seventhQues.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SeventhQues = () => {
  const [ironOption, setIronOption] = useState("");
  const [dryerOption, setDryerOption] = useState("");
  const [tweezersOption, setTweezersOption] = useState("");
  const [hotwaterOption, setHotwaterOption] = useState("");

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/eighth-ques");
  };
  useEffect(() => {
    if (
      ironOption !== "" &&
      dryerOption !== "" &&
      tweezersOption !== "" &&
      hotwaterOption !== ""
    ) {
      handleClick();
    }
    return () => {};
  }, [ironOption, dryerOption, tweezersOption, hotwaterOption]);

  return (
    <form>
      <h2> ¿Cuál de estos procesos realizas en tu cabello diariamente?</h2>
      <h3>Selecciona todas las opciones con las que te identifiques</h3>
      <div className="process-type-btn">
        <button type="button" onClick={() => setIronOption("plancha")}>
          Plancha
        </button>
        <button type="button" onClick={() => setDryerOption("secador")}>
          Secador
        </button>
        <button type="button" onClick={() => setTweezersOption("pinzas")}>
          Pinzas
        </button>
        <button
          type="button"
          onClick={() => setHotwaterOption("agua caliente")}
        >
          Lavado con agua caliente
        </button>
      </div>
      <div className="next-btn">
        <button type="button" onClick={() => handleClick()}>
          Ninguna de las anteriores
        </button>
        <button type="button" onClick={() => handleClick()}>
          Siguiente
        </button>
      </div>
    </form>
  );
};
export default SeventhQues;
