import "./ninthQues.css";
import { useNavigate } from "react-router-dom";

const NinthQues = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/tenth-ques");
  };

  return (
    <form>
      <h2>¿Cómo luce tu cabello después de lavarlo?</h2>
      <div>
        <button type="button" onClick={() => handleClick()}>
          Brilla y tiene volumen, pero pasan las horas y se pone grasoso
        </button>
        <button type="button" onClick={() => handleClick()}>
          Fácil de manejar y permanece limpio por días
        </button>
        <button type="button" onClick={() => handleClick()}>
          Bastante mal, es muy rebelde, se eríza y tiene estática
        </button>
        <button type="button" onClick={() => handleClick()}>
          Arriba es brillante, pero las puntas quedan resecas
        </button>
      </div>
    </form>
  );
};
export default NinthQues;
