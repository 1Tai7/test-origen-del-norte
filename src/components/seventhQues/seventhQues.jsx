import "./seventhQues.css";
const SeventhQues = () => {
  return (
    <form>
      <h2> ¿Cuál de estos procesos realizas en tu cabello diariamente?</h2>
      <h3>Selecciona todas las opciones con las que te identifiques</h3>
      <div className="process-type-btn">
        <button>Plancha</button>
        <button>Secador</button>
        <button>Pinzas</button>
        <button>Lavado con agua caliente</button>
      </div>
      <div className="next-btn">
        <button>Ninguna de las anteriores</button>
        <button>Siguiente</button>
      </div>
    </form>
  );
};
export default SeventhQues;
