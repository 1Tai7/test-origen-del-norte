import "./seeResult.css";
import { useNavigate } from "react-router-dom";
import iconPdf from "./../../assets/icon-pdf.svg";
import logoOrigen from "./../../assets/logo-origen.svg";
import hairTest from "./../../assets/PELO-TEST-LOGO.svg";

const SeeResults = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/results-test");
  };
  return (
    <section className="download-result-container">
      <div className="img-model"></div>
      <div className="orange-mesh"></div>
      <main>
        <div className="logo-origen">
          <img src={logoOrigen} alt="logo-origen" />
        </div>
        <div className="icon-pdf">
          <img src={iconPdf} alt="icon-pdf" />
        </div>
        <div className="next-btn">
          <button type="button" onClick={() => handleClick()}>
            VER RESULTADOS
          </button>
        </div>
        <div className="hair-test">
          <img src={hairTest} alt="hair-test" />
        </div>
      </main>
    </section>
  );
};
export default SeeResults;
