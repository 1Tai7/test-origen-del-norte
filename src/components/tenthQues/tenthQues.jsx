import "./tenthQues.css";
import { useNavigate } from "react-router-dom";

const TenthQues = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/eleventh-ques");
  };

  return (
    <form>
      <h2>
        ¿Cuándo peinas tu cabello, genera mucho frizz, se esponja o encrespa?
      </h2>
      <div>
        <button type="button" onClick={() => handleClick()}>
          Solo de vez en cuando y sobre todo cuando el día esta muy frio
        </button>
        <button type="button" onClick={() => handleClick()}>
          Sí, lo peino y al rato ya está alborotado nuevamente
        </button>
        <button type="button" onClick={() => handleClick()}>
          No, siempre puedo peinarme fácilmente
        </button>
        <button type="button" onClick={() => handleClick()}>
          Solo en algunas ocaciones, especialmente cuando no lo hidrato
        </button>
      </div>
    </form>
  );
};
export default TenthQues;
