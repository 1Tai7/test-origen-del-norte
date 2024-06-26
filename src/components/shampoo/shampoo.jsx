import "./individualHairProducts.css";
import shampoo from "./../../assets/Shampoo.svg";
import IconBack from "./../iconBack/iconBack.jsx";
import NavShop from "../navShop/navShop.jsx";
const Shampoo = () => {
  return (
    <section className="individual-products-container">
        <IconBack/>
      <figure>
        <img src={shampoo} alt="shampoo" />
      </figure>
      <article>
        <h2>DESCRIPCIÓN</h2>
        <p>
          El Shampoo de Infusión de Durazno contiene gran cantidad de vitaminas
          y minerales que favorecen el fortalecimiento del cabello. Esta fórmula
          esta enriquecida con Keratina y aceite de durazno que hidrata y
          remueve suavemente los residuos, limpiando y preparando cada hebra
          para recibir el resto del tratamiento reparador. El durazno
          proporciona nutrientes y minerales, sobre todo antioxidantes y la
          Keratina que se fusiona con las células capilares elimina la porosidad
          del cabello y restaura la fibra capilar. Lava tu cabello de dos a tres
          veces por semana según tu actividad física. Humedece el pelo y aplica
          una cantidad justa en la palma de la mano, masajea suavemente de raíz
          a puntas con la yema de tus dedos haciendo pequeños círculos. Retira
          con abundante agua. Notarás el cambio inmediatamente. ¡Es Sensacional!
          Pídelo ahora!
        </p>
      </article>
      <NavShop/>
    </section>
  );
};
export default Shampoo;
