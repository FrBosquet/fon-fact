import { useState } from "react";
import { funFactGenerator } from "./funfact-generator";
import "./styles.css";

export default function App() {
  const [funFact, setFunFact] = useState(null);

  const generate = () => {
    setFunFact(funFactGenerator());
  };

  return (
    <div
      className="Ap
    p"
    >
      <img src="logo.png" />
      <h3>Dale al boton pa ver barbaridades namas</h3>
      <button onClick={generate}>EL BOTON</button>
      {funFact && <p className="fun-fact">{funFact}</p>}
      <p className="version">version 1.0.1</p>
    </div>
  );
}
