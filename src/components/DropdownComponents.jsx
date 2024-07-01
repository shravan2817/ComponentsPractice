import React, { useState } from "react";

const DropdownComponents = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    onselect(e.target.value);
  };

  return (
    <select value={selectedOption} onChange={handleChange}>
      <option value="">Select an option</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default DropdownComponents;
