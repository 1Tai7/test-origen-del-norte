import "./twelfthQues.css";
const TwelfthQues = () => {
  return (
    <form>
      <h2>¿Cómo es tu rutina diaria de cuidado?</h2>
      <div className="care-type-btn">
        <button>Lavas solo con champú</button>
        <button>Lavas con champú y acondicionador</button>
        <button>
          Utilizo champú, acondicionador y cremas (geles, ceras, cremas para
          peinar)
        </button>
        <button>
          Utilizo champú, acondicionador y tratamientos (aceites, ampollas y
          máscaras)
        </button>
      </div>
      <div className="next-btn">
        <button>Ninguna de las anteriores</button>
      </div>
    </form>
  );
};
export default TwelfthQues;
