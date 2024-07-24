import React, { forwardRef } from "react";
import { Controller } from "react-hook-form";

const ChainWithForm = forwardRef(
  ({ item, selectedOption, onClick, control, selectedOptions }, ref) => {
    return (
      <div>
        <div className="chain_item" onClick={() => onClick(item.id)} ref={ref}>
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
  }
);

export default ChainWithForm;
