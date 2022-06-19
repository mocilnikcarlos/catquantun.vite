import "./TitleWeb.scss";

const TitleWeb1 = (props) => {
  return (
    <div className="box-title-web">
      <h2 className="title-web">{props.placeholder}</h2>
      <div className="line-row">
        <div className="line-row-left"></div>
        <div className="line-row-right"></div>
      </div>
    </div>
  );
};

const TitleWeb2 = (props) => {
  return (
    <div className="box-title-web">
      <h2 className="title-web">{props.placeholder}</h2>
      <div className="line-row reverse">
        <div className="line-row-left"></div>
        <div className="line-row-right"></div>
      </div>
    </div>
  );
};

export { TitleWeb1, TitleWeb2 };
