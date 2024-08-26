import Card from "./Card";
import "./Cards.css";
import { FRONTEND } from "../data";

function Cards() {
  return (
    <>
      <h2>Frontend uchun asosiy texnalogiyalar</h2>
      <div className="cards-wrapper">
        {FRONTEND.map((item, index) => (
          <Card key={index} {...item} />
        ))}
        {/* <Card {...FRONTEND[0]} />
      <Card {...FRONTEND[1]} />
      <Card {...FRONTEND[2]} /> */}
      </div>
    </>
  );
}

export default Cards;
