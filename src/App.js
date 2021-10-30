import { useEffect, useState } from "react";
import { funFactGenerator } from "./funfact-generator";
import "./styles.css";
import { version } from "../package.json";
import { subscribe } from "./firebase";

export default function App() {
  const [collection, setCollection] = useState(null);
  const [funFact, setFunFact] = useState(null);

  useEffect(() => {
    const unsub = subscribe((data) => {
      setCollection(data);
    });

    return () => unsub();
  }, []);

  const generate = () => {
    setFunFact(funFactGenerator(collection));
  };

  return (
    <div className="App">
      <img alt="logotipo" src="logo.png" />
      <h3>Dale al boton pa ver barbaridades namas</h3>
      <button disabled={!Boolean(collection)} onClick={generate}>
        EL BOTON
      </button>
      {funFact && <p className="fun-fact">{funFact}</p>}
      <p className="version">version {version}</p>
    </div>
  );
}
