import "./welcome.css";
import { useNavigate } from "react-router-dom";
import logoOrigen from "./../../assets/logo-origen.svg";

const WelcomeApp = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <section className="welcome-container">
      <div className="img-model"></div>
      <div className="orange-mesh"></div>
      <main>
        <div className="logo-origen">
          <img src={logoOrigen} alt="logo-origen" />
        </div>
        <div className="next-btn">
          <button type="button" onClick={() => handleClick()}>
            ENTRAR
          </button>
        </div>
      </main>
    </section>
  );
};
export default WelcomeApp;
