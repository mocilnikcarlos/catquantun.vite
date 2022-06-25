import "./CardDesigner.scss";

const CardDesigner = (props) => {
  return (
    <div className="img-card">
      <span className="icon-eye">{props.element}</span>
      <div className={`img-design-${props.img}`}></div>
      <div className="text-card">
        <span className="titleup-card">{props.title}</span>
        <span className="titledown-card">{props.text}</span>
      </div>
    </div>
  );
};

export default CardDesigner;
