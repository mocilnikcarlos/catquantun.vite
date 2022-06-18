import { ColumnVertical } from "../fig/Poligons";
import "./InfoHero.scss";

const Location = (props) => {
  return (
    <div className="box-info-hero">
      <ColumnVertical />
      <div className="box-text-info-hero">
        <span className="title-info-hero title-up">{props.placeholderup}</span>
        <span className="title-info-hero title-down">
          {props.placeholderdown}
        </span>
      </div>
    </div>
  );
};

const Hability = (props) => {
  return (
    <div className="box-info-hero">
      <ColumnVertical />
      <div className="box-text-info-hero">
        <span className="title-info-hero title-up">{props.placeholderup}</span>
        <span className="title-info-hero title-down">
          {props.placeholderdown}
        </span>
      </div>
    </div>
  );
};

export { Location, Hability };
