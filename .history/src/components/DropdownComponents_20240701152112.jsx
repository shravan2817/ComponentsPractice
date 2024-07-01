import React, { useEffect, useState } from "react";

const DropdownComponents = () => {
  const options = [{ value: "1", label: "Username" }];
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e);
  };

  useEffect(() => {});

  return (
    <select
      value={selectedOption}
      onChange={(e) => handleChange(e.target.value)}
    >
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
