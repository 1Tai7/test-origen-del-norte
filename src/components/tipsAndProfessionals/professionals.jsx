import "./tipsAndProfessionals.css";
import logoOrigen from "./../../assets/logo-origen.svg";
import professionals from "./../../assets/profesional.svg";

const Professionals = () => {
  return (
    <section className="professionals-container">
      <main>
        <div className="logo-orange">
          <img src={logoOrigen} alt="logo-origen" />
        </div>
        <div className="professional-content-ctn">
          <h3>PROFESIONALES</h3>
          <div className="img-tip-ctn">
            <img src={professionals} alt="professionals-img" />
            <div className="professionals-text-ctn">
              <div>
                <h4>Carlas Moreno</h4>
                <div className="icon-like-professionals">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-heart"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#000000"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                  </svg>
                </div>
              </div>
              <span>Especialista en cabello y tratamiento</span>
            </div>
          </div>
          <div className="next-button">
            <button>ENTRAR</button>
          </div>
        </div>
      </main>
    </section>
  );
};
export default Professionals;
