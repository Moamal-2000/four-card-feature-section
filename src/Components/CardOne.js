import imgUrl from "../images/icon-supervisor.svg";
import "./Card.css"

const CardOne = () => {
  return (
    <div className="card one">
      <h2 className="title">Supervisor</h2>
      <p className="description">
        Monitors activity to identify project roadblocks
      </p>
      <div className="img">
        <img src={imgUrl} alt="" />
      </div>
    </div>
  );
};

export default CardOne;
