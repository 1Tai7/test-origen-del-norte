import "./../shampoo/individualHairProducts.css";
import conditioner from "./../../assets/Acondicionador.svg";
import IconBack from "./../iconBack/iconBack.jsx";
import NavShop from "../navShop/navShop.jsx";
const Conditioner = () => {
  return (
    <section className="individual-products-container">
      <IconBack />
      <figure>
        <img src={conditioner} alt="conditioner" />
      </figure>
      <article>
        <h2>DESCRIPCIÓN</h2>
        <p>
          El Acondicionador de Infusión de Durazno contiene gran cantidad de
          vitaminas y minerales que favorecen el fortalecimiento del cabello.
          Esta fórmula esta enriquecida con Keratina y aceite de durazno que
          hidrata cada hebra iniciando el tratamiento reparador. El durazno
          proporciona nutrientes y minerales, sobre todo antioxidantes y la
          Keratina que se fusiona con las células capilares elimina la porosidad
          del cabello y restaura la fibra capilar. Después de lavar tu cabello
          con Shampoo Infusión de Durazno, retira el exceso de humedad y aplica
          una cantidad justa en la palma de la mano, masajea suavemente de
          puntas a hasta la mitad con la yema de tus dedos haciendo pequeños
          masajes. Deja actuar por 5 minutos. Retira con abundante agua. Notarás
          el cambio inmediatamente. ¡Es Sensacional! Pídelo ahora! Incluye: 1
          ACONDICIONADOR DE INFUSIÓN DE DURAZNO 500 ML.
        </p>
      </article>
      <NavShop />
    </section>
  );
};
export default Conditioner;
