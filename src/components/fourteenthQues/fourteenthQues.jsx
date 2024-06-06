import "./fourteenthQues.css";
const FourteenthQues = () => {
  return (
    <form>
      <h2>Estas a punto de descubrir cual es el producto ideal para ti</h2>
      <h3>Actualízanos tus datos para continuar</h3>
      <div className="form-container">
        <div>
          <label htmlFor="email">Email *</label>
          <input type="email" />
        </div>
        <div>
          <label htmlFor="telefono">Teléfono</label>
          <input type="cel" />
        </div>
        <div>
          <label htmlFor="name">Nombre *</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="last-name">Apellido</label>
          <input type="text" />
        </div>
      </div>
      <div>
        <button>Obtener Resultados</button>
      </div>
    </form>
  );
};
export default FourteenthQues;

