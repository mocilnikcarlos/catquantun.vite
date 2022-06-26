import "./CardDesigner.scss";

const FirstCardDesigner = (props) => {
  return (
    <div className="img-card-first">
      <span className="icon-eye">{props.element}</span>
      <div className={`img-design-${props.img}`}></div>
      <div className="text-card">
        <span className="titleup-card">{props.title}</span>
        <span className="titledown-card">{props.text}</span>
      </div>
    </div>
  );
};

const SecondCardDesigner = (props) => {
  return (
    <div className="img-card-second">
      <span className="icon-eye">{props.element}</span>
      <div className={`img-design-${props.img}`}></div>
      <div className="text-card">
        <span className="titleup-card">{props.title}</span>
        <span className="titledown-card">{props.text}</span>
      </div>
    </div>
  );
};

export { FirstCardDesigner, SecondCardDesigner };
