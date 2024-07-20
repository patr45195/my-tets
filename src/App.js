import { memo, useState } from "react";
import "./App.css";

const chainsOption = [
  { id: 1, name: "chain1", comment: "com1" },
  { id: 2, name: "chain2", comment: "com2" },
  { id: 3, name: "chain3", comment: "com3" },
  { id: 4, name: "chain4", comment: "com4" },
  { id: 5, name: "chain5", comment: "com5" },
];

const Chain = memo(({ item, selectedOption, onClick }) => {
  return (
    <div className="chain_item" onClick={() => onClick(item)}>
      {`Item №${item}`} <br />
      {selectedOption && (
        <div className="selected_option">
          Selected: {selectedOption.name} - {selectedOption.comment}
        </div>
      )}
    </div>
  );
});

const Modal = ({ show, options, onClose, onSelect }) => {
  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal_content">
        <h2>Select an option</h2>
        <ul>
          {options.map((option) => (
            <li key={option.id} onClick={() => onSelect(option)}>
              {option.name} - {option.comment}
            </li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

function App() {
  const [chains, setChains] = useState([1, 2, 3, 4, 5]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const addChain = () => {
    setChains((prev) => [...prev, prev.length + 1]);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  const handleOptionSelect = (option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [selectedItem]: option,
    }));
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <div>
      {chains.map((item) => (
        <Chain
          key={item}
          item={item}
          selectedOption={selectedOptions[item]}
          onClick={handleItemClick}
        />
      ))}
      <button onClick={addChain}>Add chain</button>
      <Modal
        show={showModal}
        options={chainsOption}
        onClose={handleModalClose}
        onSelect={handleOptionSelect}
      />
    </div>
  );
}

export default App;
