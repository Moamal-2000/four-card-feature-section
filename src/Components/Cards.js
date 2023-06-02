import CardFour from "./CardFour";
import CardOne from "./CardOne";
import CardThree from "./CardThree";
import CardTwo from "./CardTwo";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards">
      <CardOne />
      <div className="col">
        <CardTwo />
        <CardThree />
      </div>
      <CardFour />
    </div>
  );
};

export default Cards;
