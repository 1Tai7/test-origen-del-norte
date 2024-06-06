import "./eleventhQues.css";
import { useNavigate } from "react-router-dom";

const EleventhQues = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/twelfth-ques");
  };

  return (
    <form>
      <h2>Cuándo llueve o hay mucha humedad, tu cabelo..</h2>
      <div>
        <button type="button" onClick={() => handleClick()}>
          Se pone un poco escurrido y sin volumen
        </button>
        <button type="button" onClick={() => handleClick()}>
          Pierde solo un poco de cuerpo
        </button>
        <button type="button" onClick={() => handleClick()}>
          Se sale de control y tiende a ondularse
        </button>
        <button type="button" onClick={() => handleClick()}>
          Se esponja demasiado
        </button>
        <button type="button" onClick={() => handleClick()}>
          No le pasa nada
        </button>
      </div>
    </form>
  );
};
export default EleventhQues;
