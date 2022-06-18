import { RowHorizontal } from "../fig/Poligons";
import "./MyName.scss";

const MyName = (props) => {
  return (
    <div className="box-my-name">
      <RowHorizontal />
      <span className="text-my-name">{props.placeholder}</span>
    </div>
  );
};

export default MyName;
