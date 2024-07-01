import React, { useEffect, useState } from "react";
import DropdownComponents from "./DropdownComponents";
import TableComponents from "./TableComponents";
import axios from "axios";

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log("error fetching data:", error);
      });
  }, []);

  const handleSelect = (id) => {
    const user = users.find((user) => user.id === parseInt(id));
    setSelectedUser(user ? [user] : []);
  };

  return (
    <div>
      <h2>UserPage</h2>
      <DropdownComponents
        options={users.map((user) => ({ value: user.id, label: user.name }))}
        onSelect={handleSelect}
      />
      <TableComponents data={selectedUser || users} />
    </div>
  );
};

export default UserPage;
