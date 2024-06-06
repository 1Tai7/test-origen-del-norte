import "./firstQues.css";
import { useNavigate } from "react-router-dom";

const FirstQues = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/second-ques");
  };

  return (
    <form id="form-one">
      <h2>Selecciona tu género</h2>
      <div>
        <button type="button" onClick={() => handleClick()}>
          Femenino
        </button>
        <button type="button" onClick={() => handleClick()}>
          Masculino
        </button>
        <button type="button" onClick={() => handleClick()}>
          Otro
        </button>
      </div>
    </form>
  );
};
export default FirstQues;
