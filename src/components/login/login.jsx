import "./login.css";
import { useNavigate } from "react-router-dom";
import logoOrigen from "./../../assets/logo-origen.svg";
import iconFB from "./../../assets/icon-fb.svg";
import iconGoogle from "./../../assets/icon-google.svg";
import iconApple from "./../../assets/icon-apple.svg";

const Login = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };
  return (
    <section className="login-container">
      <div className="hair-model"></div>
      <div className="white-mesh"></div>
      <main>
        <div className="logo-origen">
          <img src={logoOrigen} alt="logo-origen" />
        </div>
        <form className="login-form">
          <div>
            <input type="text" placeholder="NOMBRE" />
          </div>
          <div>
            <input type="password" placeholder="CONTRASEÑA" />
          </div>
          <div>
            <input type="email" placeholder="CORREO" />
          </div>
          <div className="go-btn">
            <button type="button" onClick={() => handleClick()}>
              IR
            </button>
          </div>
        </form>
        <div className="social-media-container">
          <div className="fb-container">
            <img src={iconFB} alt="icon-fb" />
            <span>ENTRAR CON FACEBOOK</span>
          </div>
          <div className="google-container">
            <img src={iconGoogle} alt="icon-google" />
            <span>ENTRAR CON GMAIL</span>
          </div>
          <div className="apple-container">
            <img src={iconApple} alt="icon-apple" />
            <span>ENTRAR CON APPLE</span>
          </div>
        </div>
      </main>
    </section>
  );
};
export default Login;
