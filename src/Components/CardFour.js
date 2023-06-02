import imgUrl from "../images/icon-calculator.svg";
import "./Card.css"

const CardFour = () => {
  return (
    <div className="card four">
      <h2 className="title">Calculator</h2>
      <p className="description">
        Uses data from past projects to provide better delivery estimates
      </p>
      <div className="img">
        <img src={imgUrl} alt="" />
      </div>
    </div>
  );
};

export default CardFour;
