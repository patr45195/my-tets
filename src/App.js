import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import ChainWithForm from "./ChainWithForm"; // Импорт нового компонента

const chainsOption = [
  { id: 1, name: "chain1", comment: "com1" },
  { id: 2, name: "chain2", comment: "com2" },
  { id: 3, name: "chain3", comment: "com3" },
  { id: 4, name: "chain4", comment: "com4" },
  { id: 5, name: "chain5", comment: "com5" },
];

const Modal = ({ show, options, onClose, onSelect }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredOptions = options.filter(
    (option) =>
      option.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      option.comment.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal_content">
        <h2>Select Chain</h2>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <ul>
          {filteredOptions.map((option) => (
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
  const { control, setValue, handleSubmit } = useForm();
  const [chains, setChains] = useState(chainsOption);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const addChain = () => {
    const nextId = chains.length
      ? Math.max(...chains.map((chain) => chain.id)) + 1
      : 1;
    const newChain = {
      id: nextId,
      name: `chain${nextId}`,
      comment: `com${nextId}`,
    };
    setChains((prev) => [...prev, newChain]);
  };

  const handleItemClick = (id) => {
    setSelectedItem(id);
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

    setValue(`chain_${selectedItem}`, option);

    setShowModal(false);
    setSelectedItem(null);
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div>
      {chains.map((item) => (
        <ChainWithForm
          key={item.id}
          item={item}
          selectedOption={selectedOptions[item.id]}
          onClick={handleItemClick}
          control={control}
          selectedOptions={selectedOptions}
        />
      ))}
      <button onClick={addChain}>Add chain</button>
      <Modal
        show={showModal}
        options={chainsOption}
        onClose={handleModalClose}
        onSelect={handleOptionSelect}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <button type="submit">Log Form State</button>
      </form>
    </div>
  );
}

export default App;

// Set default values for react-hook-form
// savedChains.forEach((item) => {
//   setValue(`chain_${item.id}`, savedSelectedOptions[item.id] || {});
// });
// }, [setValue]);
