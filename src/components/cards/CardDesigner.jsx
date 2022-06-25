import EyeCard from "../../assets/svg/EyeCard";
import "./CardDesigner.scss";

const CardDesigner = () => {
  return (
    <div className="img-card">
      <span className="icon-eye">
        <EyeCard />
      </span>
      <div className="img-design"></div>
      <div className="text-card">
        <span className="titleup-card">Titulo del Diseño</span>
        <span className="titledown-card">Explicación del diseño</span>
      </div>
    </div>
  );
};

export default CardDesigner;
