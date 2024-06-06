/* eslint-disable react-hooks/exhaustive-deps */
import "./eighthQues.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EighthQues = () => {
  const [freshairOption, setFreshairOption] = useState("");
  const [contactOption, setContactOption] = useState("");
  const [gymOption, setGymOption] = useState("");
  const [swimminOption, setSwimmingOption] = useState("");
  const [cyclingOptions, setCyclingOption] = useState("");
  const [skatingOption, setSkatingOption] = useState("");

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/ninth-ques");
  };
  useEffect(() => {
    if (
      freshairOption !== "" &&
      contactOption !== "" &&
      gymOption !== "" &&
      swimminOption !== "" &&
      cyclingOptions !== "" &&
      skatingOption !== ""
    ) {
      handleClick();
    }
    return () => {};
  }, [
    freshairOption,
    contactOption,
    gymOption,
    swimminOption,
    cyclingOptions,
    skatingOption,
  ]);

  return (
    <form>
      <h2>¿Practicas alguna de estas actividades?</h2>
      <h3>Selecciona todas las opciones con las que te identifiques</h3>
      <div className="activity-type-btn">
        <button type="button" onClick={() => setFreshairOption("aire libre")}>
          Deporte al aire libre
        </button>
        <button type="button" onClick={() => setContactOption("contacto")}>
          Deporte de contacto
        </button>
        <button type="button" onClick={() => setGymOption("gym")}>
          Ejercicio en gimnacio
        </button>
        <button type="button" onClick={() => setSwimmingOption("natacion")}>
          Natación
        </button>
        <button type="button" onClick={() => setCyclingOption("ciclismo")}>
          Ciclismo
        </button>
        <button type="button" onClick={() => setSkatingOption("patinaje")}>
          Patinaje
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
export default EighthQues;
