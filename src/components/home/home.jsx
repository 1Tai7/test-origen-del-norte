import "./home.css";
import { useNavigate } from "react-router-dom";

import iconTest from "./../../assets/icon-pelo-test.svg";
import imgHairTest from "./../../assets/pelo-test-categoria.svg";
import iconProducts from "./../../assets/icon-productos.svg";
import imgProducts from "./../../assets/productos-categoria.svg";
import iconTips from "./../../assets/icon-tips.svg";
import imgTips from "./../../assets/tips-categoria.svg";
import iconProfessionals from "./../../assets/icon-profesionales.svg";
import imgProfessionals from "./../../assets/profesionales-categoria.svg";
import CategoriesCtn from "./categoriesCtn";
import NavBar from "../navBar/navBar";

const Home = () => {
  const navigate = useNavigate();
  const handleClickTest = () => {
    navigate("/start-test");
  };
  const handleClickProducts = () => {
    navigate("/products");
  };
  const handleClickTips = () => {
    navigate("/tips");
  };
  const handleClickProfessionals = () => {
    navigate("/professionals");
  };
  return (
    <section className="home-container">
      <div className="hair-model"></div>
      <div className="white-mesh"></div>
      <main>
        <header>
          <div className="icon-user">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-user-circle"
              width="47"
              height="47"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
            </svg>
          </div>
          <h2>Hola!</h2>
        </header>
        <div className="categories-container">
          <CategoriesCtn
            iconCategories={iconTest}
            altIconCategories="icon-test"
            classNameIcon="icon-ctn-hair-test"
            nameCategories="PELO/TEST"
            imgCategories={imgHairTest}
            altImgCategories="img-hair-test"
            onClick={handleClickTest}
          />
          <CategoriesCtn
            iconCategories={iconProducts}
            altIconCategories="icon-products"
            classNameIcon="icon-ctn-products"
            nameCategories="PRODUCTOS"
            imgCategories={imgProducts}
            altImgCategories="img-products"
            onClick={handleClickProducts}
          />
          <CategoriesCtn
            iconCategories={iconTips}
            altIconCategories="icon-tips"
            classNameIcon="icon-ctn-tips"
            nameCategories="TIPS"
            imgCategories={imgTips}
            altImgCategories="img-tips"
            onClick={handleClickTips}
          />
          <CategoriesCtn
            iconCategories={iconProfessionals}
            altIconCategories="icon-professionals"
            classNameIcon="icon-ctn-professionals"
            nameCategories="PROFESIONALES"
            imgCategories={imgProfessionals}
            altImgCategories="img-professionals"
            onClick={handleClickProfessionals}
          />
        </div>
      </main>
      <NavBar />
    </section>
  );
};
export default Home;
