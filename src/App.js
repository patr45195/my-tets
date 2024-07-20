import { memo, useState } from "react";
import "./App.css";

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
