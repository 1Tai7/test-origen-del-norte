import "./twelfthQues.css";
import { useNavigate } from "react-router-dom";

const TwelfthQues = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/thirteenth-ques");
  };

  return (
    <form>
      <h2>¿Cómo es tu rutina diaria de cuidado?</h2>
      <div className="care-type-btn">
        <button type="button" onClick={() => handleClick()}>
          Lavas solo con champú
        </button>
        <button type="button" onClick={() => handleClick()}>
          Lavas con champú y acondicionador
        </button>
        <button type="button" onClick={() => handleClick()}>
          Utilizo champú, acondicionador y cremas (geles, ceras, cremas para
          peinar)
        </button>
        <button type="button" onClick={() => handleClick()}>
          Utilizo champú, acondicionador y tratamientos (aceites, ampollas y
          máscaras)
        </button>
      </div>
      <div className="next-btn">
        <button type="button" onClick={() => handleClick()}>
          Ninguna de las anteriores
        </button>
      </div>
    </form>
  );
};
export default TwelfthQues;
