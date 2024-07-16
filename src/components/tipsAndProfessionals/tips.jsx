import "./tipsAndProfessionals.css";
import logoOrigen from "./../../assets/logo-origen.svg";
import hairTip from "./../../assets/tip-vitalidad-puntas.svg";
import IconHome from "../iconHome/iconHome";

const Tips = () => {
  return (
    <section className="tips-container">
      <IconHome />
      <main>
        <div className="logo-wine">
          <img src={logoOrigen} alt="logo-origen" />
        </div>
        <div className="tips-content-ctn">
          <h3>ARTICULOS DE INTERES</h3>
          <div className="img-tip-ctn">
            <img src={hairTip} alt="hair-tip" />
            <span>Tips para recuperar la vitalidad de tus puntas</span>
          </div>
          <div className="next-button">
            <button>ENTRAR</button>
          </div>
        </div>
      </main>
    </section>
  );
};
export default Tips;
