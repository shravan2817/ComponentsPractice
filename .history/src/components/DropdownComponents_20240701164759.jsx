import axios from "axios";
import React, { useEffect, useState } from "react";

const DropdownComponents = () => {
  // const options = [{ value: "1", label: "Username" }];
  // const [selectedOption, setSelectedOption] = useState("");

  const [mandals, setMandals] = useState([]);

  function MandalRes(e) {
    console.log(e);
    axios
      .get("http://172.17.206.31:6969/demo/getMandal/" + e)
      .then((Mandalres) => {
        console.log(Mandalres?.data?.ResponseDesc);
        setMandals(Mandalres?.data?.ResponseDesc);
      });
  }

  const [districts, setDistricts] = useState([]);
  useEffect(() => {
    axios
      .get("http://172.17.206.31:6969/demo/getDistricts")
      .then((Response) => {
        console.log(Response.data.ResponseDesc);
        setDistricts(Response.data.ResponseDesc);
      });
  }, []);

  const handleChange = (e) => {
    // setSelectedOption(e);
    setDistricts(e);
    setMandals(e);
  };

  return (
    <>
      {/* <select
        value={selectedOption}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select> */}

      <select onChange={(e) => MandalRes(e.target.value)}>
        <option value="">Select</option>
        {districts.map((option) => (
          <option key={option.lgd_id} value={option.lgd_id}>
            {option.district_name}
          </option>
        ))}
      </select>
      <select>
        <option value="">Select</option>
        {mandals?.map((option) => (
          <option key={option.mandal_code} value={option.mandal_code}>
            {option.mandal_name}
          </option>
        ))}
      </select>
    </>
  );
};

export default DropdownComponents;
