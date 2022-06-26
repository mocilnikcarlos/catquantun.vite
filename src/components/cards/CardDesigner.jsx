import "./CardDesigner.scss";

const FirstCardDesigner = (props) => {
  return (
    <div className="img-card-first">
      <div className="box-eye">
        <span className="icon-eye">{props.element}</span>
      </div>
      <div className={`img-design-${props.src}`}></div>
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
      <div className="box-eye">
        <span className="icon-eye">{props.element}</span>
      </div>
      <div className={`img-design-${props.src}`}></div>
      <div className="text-card">
        <span className="titleup-card">{props.title}</span>
        <span className="titledown-card">{props.text}</span>
      </div>
    </div>
  );
};

export { FirstCardDesigner, SecondCardDesigner };
