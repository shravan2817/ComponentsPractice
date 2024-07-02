import React from "react";

const TableComponents = () => {
  // const data = [
  //   { id: "1001", name: "Shravan", email: "Shravan@gmail.com" },
  //   { id: "1001", name: "Shravan", email: "Shravan@gmail.com" },
  // ];
  return (
    <table border="1" className="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponents;
