import { useEffect, useState } from "react";
import { getAllSpells } from "./api";
import SpellCard from "./SpellCard";
import "./styles.css";

export default function App() {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    const savedSpells = localStorage.getItem("spells");
    if (savedSpells) setSpells(JSON.parse(savedSpells));
    getAllSpells().then((spells) => {
      setSpells(spells);
      localStorage.setItem("spells", JSON.stringify(spells));
    });
  }, []);


  return (
    <div className="App">
      {spells.length === 0 && <span className="loading">Loading...</span>}
      <ul className="spell-list">
        {spells.map((spell) => (
          <SpellCard key={spell.index} spell={spell} />
        ))}
      </ul>
    </div>
  );
}


