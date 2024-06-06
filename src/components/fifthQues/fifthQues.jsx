import "./fifthQues.css";
const FifthQues = () => {
  return (
    <form>
      <h2>¿Cómo es tu cuero cabelludo?</h2>
      <h3>Selecciona todas las opciones con las que te identificas</h3>

      <div className="hair-type-btn">
        <button>Graso</button>
        <button>Seco</button>
        <button>Con piquiña</button>
        <button>Con caspa</button>
        <button>Con escamas</button>
        <button>Normal</button>
      </div>
      <div className="next-btn">
        <button>Siguiente</button>
      </div>
    </form>
  );
};
export default FifthQues;
