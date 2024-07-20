import React from "react";
import { Controller } from "react-hook-form";

const ChainWithForm = ({
  item,
  selectedOption,
  onClick,
  control,
  selectedOptions,
}) => {
  return (
    <div>
      <div className="chain_item" onClick={() => onClick(item.id)}>
        {`Item №${item.id}`} <br />
        {selectedOption && (
          <div className="selected_option">
            Selected: {selectedOption.name} - {selectedOption.comment}
          </div>
        )}
      </div>
      <Controller
        name={`chain_${item.id}`}
        control={control}
        render={({ field }) => (
          <input
            type="hidden"
            {...field}
            value={selectedOptions[item.id] || ""}
          />
        )}
      />
    </div>
  );
};

export default ChainWithForm;
