import React, { useEffect, useState } from "react";

const DropdownComponents = () => {
  const options = [{ value: "1", label: "Username" }];
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e);
  };

  useEffect(() => {});
  axios.get("http://172.17.206.31:6969/demo/getDistricts").then(Response);

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
