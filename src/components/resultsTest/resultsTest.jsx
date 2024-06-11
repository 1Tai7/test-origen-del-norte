const ResultsTest = () => {
  const data = localStorage.getItem("respuesta 1");
  console.log(JSON.parse(data));
  return <h1>{JSON.parse(data).answ}</h1>;
};
export default ResultsTest;
