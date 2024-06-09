/* eslint-disable react/prop-types */
import "./startTest.css";
import handWithPhone from "./../../assets/mano-con-cel.svg";
import logoOrigen from "./../../assets/logo-origen.svg";
import logoHairTest from "./../../assets/PELO-TEST-LOGO.svg";

const StartTest = () => {
  return (
    <section className="start-test-container">
      <main>
        <div className="images-container">
          <div>
            <img src={logoOrigen} alt="logo-origen" />
          </div>
          <div>
            <img src={logoHairTest} alt="logo-hair-test" />
          </div>
          <div>
            <img src={handWithPhone} alt="img-hand-with-phone" />
          </div>
        </div>
      </main>
    </section>
  );
};
export default StartTest;
