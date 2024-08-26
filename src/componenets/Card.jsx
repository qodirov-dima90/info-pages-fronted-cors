import "./Card.css";

function Card({ title, text, img }) {
  return (
    <div className="card-blok">
      <img className="card-img" src={img} />
      <h4 className="card-title">{title}</h4>
      <p className="card-text">{text}</p>
    </div>
  );
}

export default Card;
