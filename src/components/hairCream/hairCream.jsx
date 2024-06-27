import "./../shampoo/individualHairProducts.css";
import cream from "./../../assets/Crema-de-peinar.svg";
import IconBack from "./../iconBack/iconBack.jsx";
import NavShop from "../navShop/navShop.jsx";
const HairCream = () => {
  return (
    <section className="individual-products-container">
      <IconBack />
      <figure>
        <img src={cream} alt="hair-cream" />
      </figure>
      <article>
        <h2>DESCRIPCIÓN</h2>
        <p>
          La crema para peinar es un producto que no puede faltar en tus rutinas
          de cuidado capilar. Con la crema para peinar con Infusión de Durazno
          proteges la hebra capilar de los excesos en el uso de la plancha de
          cabello, secador o rizador, ayuda a sellar la cutícula capilar,
          disminuye el exceso de frizz y asegura un buen acabado, dependiendo
          del look que quieras lucir. Aporta brillo extra, suavidad y protege tu
          cabello de los rayos UV. La crema para peinar se debe colocar de
          medios a puntas, y no es necesario que sea una cantidad excesiva, con
          un poco en la palma de tu mano será suficiente. Aplícala cuando el
          cabello este húmedo pero no extremadamente mojado. Suavidad y
          vitalidad en poco tiempo...Compra Ahora ! Incluye: 1 CREMA PARA PEINAR
          DE 250 ml
        </p>
      </article>
      <NavShop />
    </section>
  );
};
export default HairCream;
