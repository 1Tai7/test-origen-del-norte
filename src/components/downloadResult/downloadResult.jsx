import "./downloadResult.css";
// import model from "./../../assets/modelo-naranja-inicio.svg";
// import orangeMNesh from "./../../assets/malla-naranja.svg";
import iconPdf from "./../../assets/icon-pdf.svg";
import logoOrigen from "./../../assets/logo-origen.svg";
import hairTest from "./../../assets/PELO-TEST-LOGO.svg";

const DownloadResult = () => {
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
        <div>
          <button>DESCARGAR RESULTADO</button>
        </div>
        <div className="hair-test">
          <img src={hairTest} alt="hair-test" />
        </div>
      </main>
    </section>
  );
};
export default DownloadResult;
