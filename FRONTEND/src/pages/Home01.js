import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home01() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border table-primary shadow">
          <thead>
            <tr>
              <th scope="col">Numero</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">correo</th>
              <th scope="col">edad</th>
              <th scope="col">Hacer</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.edad}</td>
                <td>
                  <Link
                    className="btn btn-dark mx-2"
                    to={`/viewuser/${user.id}`}
                  >
                    Ver
                  </Link>
                  <Link
                    className="btn btn-dark mx-2"
                    to={`/edituser/${user.id}`}
                  >
                    Editar
                  </Link>
                  <button
                    className="btn btn-warning mx-2"
                    onClick={() => deleteUser(user.id)}
                  >
                    Eliminar
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