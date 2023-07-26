import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    edad: "",
  });

  const { name, username, email, edad } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/home01");
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 border rounded p-4 mt-4 shadow">
          <h2 className="text-center mb-4">Registrar Usuario</h2>

          <form
            onSubmit={(e) => onSubmit(e)}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="mb-3 d-flex">
              <label htmlFor="Name" className="form-label flex-grow-1 mx-5">
                Nombre
              </label>
              <input
                type="text"
                className="form-control flex-grow-2"
                placeholder="Ingresa tu nombre"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3 d-flex">
              <label htmlFor="Username" className="form-label flex-grow-1 mx-5">
                Apellido
              </label>
              <input
                type="text"
                className="form-control flex-grow-2"
                placeholder="Ingresa tu apellido "
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3 d-flex">
              <label htmlFor="Email" className="form-label flex-grow-1 mx-5">
                Correo
              </label>
              <input
                type="email"
                className="form-control flex-grow-2"
                placeholder="Ingresa tu dirección de correo electrónico"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3 d-flex">
              <label htmlFor="Email" className="form-label flex-grow-1 mx-5">
                Edad
              </label>
              <input
                type="number"
                className="form-control flex-grow-2"
                placeholder="Ingresa tu edad"
                name="edad"
                value={edad}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="text-center mt-3">
              <button type="submit" className="btn btn-primary mr-2">
                Enviar
              </button>
              <Link className="btn btn-secondary" to="/home01">
                Cancelar
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
