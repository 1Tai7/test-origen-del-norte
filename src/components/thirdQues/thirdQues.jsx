import "./thirdQues.css";
import { useNavigate } from "react-router-dom";

const ThirdQues = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/fourth-ques");
  };

  return (
    <form>
      <h2>¿Cómo es la textura de tu cabello?</h2>
      <div>
        <button type="button" onClick={() => handleClick()}>
          Escaso
        </button>
        <button type="button" onClick={() => handleClick()}>
          Delgado
        </button>
        <button type="button" onClick={() => handleClick()}>
          Grueso
        </button>
        <button type="button" onClick={() => handleClick()}>
          Abundante
        </button>
      </div>
    </form>
  );
};
export default ThirdQues;
