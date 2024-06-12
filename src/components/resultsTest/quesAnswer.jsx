/* eslint-disable react/prop-types */
const QuesAnswer = ({ number, question, answer }) => {
  const data = localStorage.getItem("respuesta 1");
  console.log(JSON.parse(data));

  return (
    <>
      <span className="number-results">{number}</span>
      <div className="show-result-ctn">
        <div className="ques-results">
          <span>{question}</span>
        </div>
        <div className="answ-results">
          <span>{answer}</span>
        </div>
      </div>
    </>
  );
};
export default QuesAnswer;

//   JSON.parse(data).answ;
