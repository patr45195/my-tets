import { useState } from "react";
import "./App.css";

const Chain = ({ item }) => {
  return <div className="chain_item">{`Item №${item}`}</div>;
};

function App() {
  const [chains, setChains] = useState([1, 2, 3, 4, 5]);

  const addChain = () => {
    setChains((prev) => [...prev, chains.length + 1]);
  };

  return (
    <div>
      {chains.map((item, index) => (
        <Chain key={index} item={item} />
      ))}
      <button onClick={addChain}>Add chain</button>
    </div>
  );
}

export default App;
