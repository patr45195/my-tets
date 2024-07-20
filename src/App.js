import { useState } from "react";
import "./App.css";

function App() {
  const [chains, setChains] = useState([1, 2]);

  return (
    <div>
      {chains.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}

export default App;
