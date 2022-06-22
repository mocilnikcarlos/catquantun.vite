import "./CardLines.scss";

const CardLines = (props) => {
  return (
    <div className="card-line">
      <span className="linehover"></span>
      <span className="linehover"></span>
      <span className="linehover"></span>
      <span className="linehover"></span>
      <div className="content-card-line">
        <div className="content-title-card-line">
          <div className="icon-card-line">{props.element}</div>
          <p className="title-card-line">{props.title}</p>
        </div>

        <p className="text-card-line">{props.text}</p>
      </div>
    </div>
  );
};

export default CardLines;
