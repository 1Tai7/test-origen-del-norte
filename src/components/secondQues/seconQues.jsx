import "./secondQues.css";
import { useNavigate } from "react-router-dom";

const SecondQues = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/third-ques");
  };

  return (
    <form>
      <h2>Selecciona tu tipo de cabello</h2>
      <div>
        <button type="button" onClick={() => handleClick()}>
          Liso
        </button>
        <button type="button" onClick={() => handleClick()}>
          Ondulado
        </button>
        <button type="button" onClick={() => handleClick()}>
          Rizado
        </button>
        <button type="button" onClick={() => handleClick()}>
          Afro
        </button>
      </div>
    </form>
  );
};
export default SecondQues;
