import "./products.css";
import { useNavigate } from "react-router-dom";

import shampoo from "./../../assets/Shampoo.svg";
import conditioner from "./../../assets/Acondicionador.svg";
import cream from "./../../assets/Crema-de-peinar.svg";
import logoOrigen from "./../../assets/logo-origen.svg";

const Products = () => {
  const navigate = useNavigate();
  const handleClickshampoo = () => {
    navigate("/shampoo");
  };
  const handleClickConditioner = () => {
    navigate("/conditioner");
  };
  const handleClickCream = () => {
    navigate("/hair-cream");
  };
  return (
    <section className="products-container">
      <main>
        <div className="logo-ctn">
          <img src={logoOrigen} alt="logo-origen" />
        </div>
        <div className="products">
          <div className="shampoo-and-conditioner">
            <div>
              <figure className="mustard-ctn"></figure>
              <div type="button" onClick={() => handleClickshampoo()}>
                <img src={shampoo} alt="shampoo" />
                <h3>SHAMPOO DURAZNO</h3>
              </div>
            </div>
            <div>
              <figure className="mustard-ctn"></figure>
              <div type="button" onClick={() => handleClickConditioner()}>
                <img src={conditioner} alt="conditioner" />
                <h3>ACONDICIONADOR DURAZNO</h3>
              </div>
            </div>
          </div>
          <div>
            <figure className="mustard-ctn"></figure>
            <div type="button" onClick={() => handleClickCream()}>
              <img src={cream} alt="cream" />
              <h3>CREMA DE PEINAR DURAZNO</h3>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};
export default Products;
