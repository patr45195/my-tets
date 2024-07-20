import { memo, useState } from "react";
import "./App.css";

const chainsOption = [
  { id: 1, name: "chain1", comment: "com1" },
  { id: 2, name: "chain2", comment: "com2" },
  { id: 3, name: "chain3", comment: "com3" },
  { id: 4, name: "chain4", comment: "com4" },
  { id: 5, name: "chain5", comment: "com5" },
];

const Chain = memo(({ item }) => {
  return <div className="chain_item">{`Item №${item}`}</div>;
});

function App() {
  const [chains, setChains] = useState([1, 2, 3, 4, 5]);

  const addChain = () => {
    setChains((prev) => [...prev, prev.length + 1]);
  };

  return (
    <div>
      {chains.map((item) => (
        <Chain key={item} item={item} />
      ))}
      <button onClick={addChain}>Add chain</button>
    </div>
  );
}

export default App;
