import LivreImg from "./LivreImg";
import LivreTitle from "./LivreTitle";
import LivrePrice from "./LivrePrice";

export default function Livre({ title, rating }) {
  const c = {
    border: "1px solid #cccccc67",
    padding: "10px",
    margin: "10px",
    borderRadius: "8px",
    width: "150px",
    textAlign: "center"
  };

  return (
    <div style={c}>
      <LivreImg />
      <LivreTitle title={title} />
      <LivrePrice rating={rating} />
    </div>
  );
}
