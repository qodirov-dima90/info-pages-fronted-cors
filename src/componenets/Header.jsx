import "./Header.css";
const front = ["HTML", "CSS", "JS", "Bootstrap"];
import reactlogo from "../image/react-logo-oq.png";
const reactLogo = reactlogo;

function getRandom(m) {
  return Math.floor(Math.random() * (m + 1));
}
function Header() {
  return (
    <div>
      <img className="App-logo" src={reactLogo} />
      <h1 className="header-title"> 🫡 Salom 👨‍💻 Frontendga qiziqasizmi</h1>
      <p className="header-text">
        React Js darslariga hushkelibsiz!!! <br /> Siz kursimizda{" "}
        {front[getRandom(3)]} ni o'ganasiz
      </p>
    </div>
  );
}

export default Header;
