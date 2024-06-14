/* eslint-disable react/prop-types */
import "./home.css";
const CategoriesCtn = ({
  iconCategories,
  altIconCategories,
  classNameIcon,
  nameCategories,
  imgCategories,
  altImgCategories,
}) => {
  return (
    <div>
      <div className={classNameIcon}>
        <img src={iconCategories} alt={altIconCategories} />
      </div>
      <div className="info-categories">
        <h3>{nameCategories}</h3>
        <img src={imgCategories} alt={altImgCategories} />
        <div className="button-go">
          <button>Entrar</button>
        </div>
      </div>
    </div>
  );
};
export default CategoriesCtn;
