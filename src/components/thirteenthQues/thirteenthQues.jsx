/* eslint-disable react-hooks/exhaustive-deps */
import "./thirteenthQues.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ThirteenthQues = () => {
  const [hairpinOption, setHairpinOption] = useState("");
  const [breakageOption, setBreakageOption] = useState("");
  const [greaseOption, setGreaseOption] = useState("");
  const [dandruffOption, setDandruffOption] = useState("");
  const [growthOption, setGrowthOption] = useState("");
  const [volumeOption, setVolumeOption] = useState("");
  const [hydrationOption, setHydrationOption] = useState("");

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/fourteenth-ques");
  };
  useEffect(() => {
    if (
      hairpinOption !== "" &&
      breakageOption !== "" &&
      greaseOption !== "" &&
      dandruffOption !== "" &&
      growthOption !== "" &&
      volumeOption !== "" &&
      hydrationOption !== ""
    ) {
      handleClick();
    }
    return () => {};
  }, [
    hairpinOption,
    breakageOption,
    greaseOption,
    dandruffOption,
    growthOption,
    volumeOption,
    hydrationOption,
  ]);

  return (
    <form>
      <h2>¿Cuál es tu objetivo en cuanto a requerimientos capilares?</h2>
      <h3>Selecciona todas las opciones con las que te identifiques</h3>
      <div className="type-requiere-btn">
        <button type="button" onClick={() => setHairpinOption("horquilla")}>
          Evitar la horquilla
        </button>
        <button type="button" onClick={() => setBreakageOption("quiebre")}>
          Evitar que se quiebre
        </button>
        <button type="button" onClick={() => setGreaseOption("grasa")}>
          Controlar la grasa
        </button>
        <button type="button" onClick={() => setDandruffOption("caspa")}>
          Controlar la caspa
        </button>
        <button type="button" onClick={() => setGrowthOption("crecimiento")}>
          Estimular su crecimiento
        </button>
        <button type="button" onClick={() => setVolumeOption("volumen")}>
          Aumentar su volumen
        </button>
        <button type="button" onClick={() => setHydrationOption("hidratacion")}>
          Aumentar su hidratación
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
export default ThirteenthQues;
