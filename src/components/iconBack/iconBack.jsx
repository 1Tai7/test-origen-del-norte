import "./iconBack.css"
const IconBack = () => {
  return (
    <div className="icon-back">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-circle-arrow-left"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#ffffff"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 21a9 9 0 1 0 0 -18a9 9 0 0 0 0 18" />
        <path d="M8 12l4 4" />
        <path d="M8 12h8" />
        <path d="M12 8l-4 4" />
      </svg>
    </div>
  );
};
export default IconBack;
