/* eslint-disable react/prop-types */
import "./startForm.css";
import { useNavigate } from "react-router-dom";

const StartForm = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/first-ques");
  };
  return (
    <form>
      <h2>
        Identifica tu tipo de cabello y conoce los productos ideales para ti
      </h2>
      <button type="button" onClick={() => handleClick()}>
        Iniciar test
      </button>
    </form>
  );
};
export default StartForm;
