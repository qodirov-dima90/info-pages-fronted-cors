import Cards from "./componenets/Cards";
import Exsempol from "./componenets/Exsempol";
import Header from "./componenets/Header";

import "./styles.css";

export default function App() {
  console.log("App componenets render");

  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <Cards />
        </section>
        <section>
          <Exsempol />
        </section>
      </main>
    </div>
  );
}
