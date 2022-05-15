import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  const loadUsers = () => {
    axios.get("http://localhost:3001/users").then((res) => {
      setUsers(res.data.reverse());
    });
  };

  useEffect(() => {
    loadUsers();
  }, [users]);

  function Delete(id) {
    axios.delete(`http://localhost:3001/users/${id}`).then(loadUsers())
  }

  return (
    <div className="w-full h-full flex flex-col px-10 py-8">
      <div className="w-full flex flex-col min-h-[50vh] justify-center items-center">
        <h1 className="text-black text-3xl font-semibold font-Montserrat">
          Home Page
        </h1>
        <table className="w-[80%] text-center overflow-hidden overflow-y-scroll mt-8 border border-black">
          <thead className="border-b bg-gray-800">
            <tr>
              <th
                scope="col"
                className="text-lg font-medium text-white px-6 py-4"
              >
                #
              </th>
              <th
                scope="col"
                className="text-lg font-medium text-white px-6 py-4"
              >
                Name
              </th>
              <th
                scope="col"
                className="text-lg font-medium text-white px-6 py-4"
              >
                Email
              </th>
              <th
                scope="col"
                className="text-lg font-medium text-white px-6 py-4"
              >
                Phone
              </th>
              <th
                scope="col"
                className="text-lg font-medium text-white px-6 py-4"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((data, index) => (
              <tr key={index} className="bg-white border-b">
                <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-lg font-light text-gray-900">
                  {data.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-lg font-light text-gray-900">
                  {data.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-lg font-light text-gray-900">
                  {data.phone}
                </td>
                <td className="flex justify-center items-center space-x-4 mt-1">
                  <Link
                    to={`/users/${data.id}`}
                    className="px-6 py-2 text-white font-normal bg-black rounded-lg"
                  >
                    View
                  </Link>
                  <Link to={`/edit-user/${data.id}`} className="px-6 py-2 text-white font-normal bg-blue-600 rounded-lg">
                    Edit
                  </Link>
                  <button
                    onClick={() => Delete(data.id)}
                    className="px-6 py-2 text-white font-normal bg-red-600 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
