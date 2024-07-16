/* eslint-disable react/prop-types */
import "./home.css";
const CategoriesCtn = ({
  iconCategories,
  altIconCategories,
  classNameIcon,
  nameCategories,
  imgCategories,
  altImgCategories,
  onClick
}) => {
  return (
    <div>
      <div className="info-categories">
        <div className={classNameIcon}>
          <img src={iconCategories} alt={altIconCategories} />
        </div>

        <h3>{nameCategories}</h3>
        <img src={imgCategories} alt={altImgCategories} />
        <div>
          <button onClick={onClick}>Entrar</button>
        </div>
      </div>
    </div>
  );
};
export default CategoriesCtn;
