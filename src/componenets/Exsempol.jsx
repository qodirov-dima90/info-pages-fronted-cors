import { useState } from "react";
import { EXSEMPOL } from "../frontData";
import TabButtan from "./TabButtan";
function Exsempol() {
  const [selectedTops, setSelectedTops] = useState();

  function handleSelect(selectedButtan) {
    setSelectedTops(selectedButtan);
    console.log(selectedButtan);
  }
  return (
    <div>
      <h2>Misollar</h2>
      <main className="list-item">
        <TabButtan
          isSelected={selectedTops === "HTML"}
          onSelect={() => handleSelect("HTML")}
        >
          HTML elemets
        </TabButtan>
        <TabButtan
          isSelected={selectedTops === "CSS"}
          onSelect={() => handleSelect("CSS")}
        >
          CSS style
        </TabButtan>
        <TabButtan
          isSelected={selectedTops === "JS"}
          onSelect={() => handleSelect("JS")}
        >
          JS o'zgaruvchi
        </TabButtan>
        <TabButtan
          isSelected={selectedTops === "JSF"}
          onSelect={() => handleSelect("JSF")}
        >
          JS funksiyalar
        </TabButtan>
        <TabButtan
          isSelected={selectedTops === "TS"}
          onSelect={() => handleSelect("TS")}
        >
          TypeScript code
        </TabButtan>
        <TabButtan
          isSelected={selectedTops === "Componenta"}
          onSelect={() => handleSelect("Componenta")}
        >
          React Componenta
        </TabButtan>
      </main>
      <article className="selected-content">
        {!selectedTops && <p>Bittasini tanlang</p>}
        {selectedTops && (
          <div>
            <h3>{EXSEMPOL[selectedTops].title}</h3>
            <p>{EXSEMPOL[selectedTops].description}</p>
            <pre>
              <code>{EXSEMPOL[selectedTops].code}</code>
            </pre>
          </div>
        )}
      </article>
    </div>
  );
}

export default Exsempol;
