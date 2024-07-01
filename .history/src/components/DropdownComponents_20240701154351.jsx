import axios from "axios";
import React, { useEffect, useState } from "react";

const DropdownComponents = () => {
  const options = [{ value: "1", label: "Username" }];
  const [selectedOption, setSelectedOption] = useState("");

  const [districts, setDistricts] = useState("");
  useEffect(() => {
    axios
      .get("http://172.17.206.31:6969/demo/getDistricts")
      .then((Response) => {
        console.log(Response.data.ResponseDesc);
        setDistricts(Response.data.ResponseDesc);
      });
  }, []);

  const handleChange = (e) => {
    setSelectedOption(e);
    setDistricts(e);
  };

  return (
    <>
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

      <select>
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default DropdownComponents;
