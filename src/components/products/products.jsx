import "./products.css";
import shampoo from "./../../assets/Shampoo.svg";
import conditioner from "./../../assets/Acondicionador.svg";
import cream from "./../../assets/Crema-de-peinar.svg";
import logoOrigen from "./../../assets/logo-origen.svg";

const Products = () => {
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
              <div>
                <img src={shampoo} alt="shampoo" />
                <h3>SHAMPOO DURAZNO</h3>
              </div>
            </div>
            <div>
              <figure className="mustard-ctn"></figure>
              <div>
                <img src={conditioner} alt="conditioner" />
                <h3>ACONDICIONADOR DURAZNO</h3>
              </div>
            </div>
          </div>
          <div>
            <figure className="mustard-ctn"></figure>
            <div>
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
