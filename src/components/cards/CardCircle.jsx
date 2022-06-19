import UserSpeak from "../../assets/svg/UserSpeak";
import "./CardCircle.scss";

const CardCircle = (props) => {
  return (
    <div className="box-circle-design">
      <div className="content-circle-design">
        <div className="icon-circle">
          <div className="icon">{props.element}</div>
        </div>
        <span className="title-circle title-circle-up">
          {props.placeholderinside}
        </span>
        <span className="title-circle title-circle-down">
          {props.placeholderout}
        </span>
      </div>
    </div>
  );
};

export default CardCircle;
