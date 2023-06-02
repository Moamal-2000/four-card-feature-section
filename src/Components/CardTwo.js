import imgUrl from "../images/icon-team-builder.svg";
import "./Card.css"

const CardTwo = () => {
  return (
    <div className="card two">
      <h2 className="title">Team Builder</h2>
      <p className="description">
        Scans our talent network to create the optimal team for your project
      </p>
      <div className="img">
        <img src={imgUrl} alt="" />
      </div>
    </div>
  );
};

export default CardTwo;
