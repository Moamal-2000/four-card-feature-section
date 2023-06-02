import imgUrl from "../images/icon-karma.svg";
import "./Card.css"

const CardThree = () => {
  return (
    <div className="card three">
      <h2 className="title">Karma</h2>
      <p className="description">
        Regularly evaluates our talent to ensure quality
      </p>
      <div className="img">
        <img src={imgUrl} alt="" />
      </div>
    </div>
  );
};

export default CardThree;
