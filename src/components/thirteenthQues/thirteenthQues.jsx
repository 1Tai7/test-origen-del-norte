import "./thirteenthQues.css";
const ThirteenthQues = () => {
  return (
    <form>
      <h2>¿Cuál es tu objetivo en cuanto a requerimientos capilares?</h2>
      <h3>Selecciona todas las opciones con las que te identifiques</h3>
      <div className="type-requiere-btn">
        <button>Evitar la horquilla</button>
        <button>Evitar que se quiebre</button>
        <button>Controlar la grasa</button>
        <button>Controlar la caspa</button>
        <button>Estimular su crecimiento</button>
        <button>Aumentar su volumen</button>
        <button>Aumentar su hidratación</button>
      </div>
      <div className="next-btn">
        <button>Siguiente</button>
      </div>
    </form>
  );
};
export default ThirteenthQues;
