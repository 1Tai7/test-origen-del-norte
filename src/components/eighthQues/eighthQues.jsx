import "./eighthQues.css";
const EighthQues = () => {
  return (
    <form>
      <h2>¿Practicas alguna de estas actividades?</h2>
      <h3>Selecciona todas las opciones con las que te identifiques</h3>
      <div className="activity-type-btn">
        <button>Deporte al aire libre</button>
        <button>Deporte de contacto</button>
        <button>Ejercicio en gimnacio</button>
        <button>Natación</button>
        <button>Ciclismo</button>
        <button>Patinaje</button>
      </div>
      <div className="next-btn">
        <button>Ninguna de las anteriores</button>
        <button>Siguiente</button>
      </div>
    </form>
  );
};
export default EighthQues;
