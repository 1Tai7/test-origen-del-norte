/* eslint-disable react-hooks/exhaustive-deps */
import "./fourthQues.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FourthQues = () => {
  const [fourQuesOne, setFourQuesOne] = useState("");
  const [fourQuesTwo, setFourQuesTwo] = useState("");

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/fifth-ques");
  };
  useEffect(() => {
    if (fourQuesOne !== "" && fourQuesTwo !== "") {
      handleClick();
    }
    return () => {};
  }, [fourQuesOne, fourQuesTwo]);

  return (
    <form>
      <div>
        <h2>¿Te has decolocado el cabello?</h2>
        <div>
          <button type="button" onClick={() => setFourQuesOne("si")}>
            Si
          </button>
          <button type="button" onClick={() => setFourQuesOne("no")}>
            No
          </button>
        </div>
      </div>
      <div>
        <h2>¿Te has realizado keratina?</h2>
        <div>
          <button type="button" onClick={() => setFourQuesTwo("si")}>
            Si
          </button>
          <button type="button" onClick={() => setFourQuesTwo("no")}>
            No
          </button>
        </div>
      </div>
    </form>
  );
};
export default FourthQues;
