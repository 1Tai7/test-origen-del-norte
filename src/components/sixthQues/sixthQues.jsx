import "./sixthQues.css";
import { useNavigate } from "react-router-dom";

const SixthQues = () => {
    const navigate = useNavigate();
    const handleClick = () => {
      navigate("/seventh-ques");
    };

  return (
    <form>
      <h2>¿Con qué frecuencia lavas tu cabello?</h2>
      <div>
        <button type="button" onClick={() => handleClick()}>
          Todos los días
        </button>
        <button type="button" onClick={() => handleClick()}>
          Un día si, un día no
        </button>
        <button type="button" onClick={() => handleClick()}>
          Una vez por semana
        </button>
        <button type="button" onClick={() => handleClick()}>
          Dos veces a la semana
        </button>
      </div>
    </form>
  );
};
export default SixthQues;
