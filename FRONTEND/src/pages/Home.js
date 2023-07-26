import React, { useState } from "react";
import onLogin from "../utilities/onLogin";
import "../style/styles.css";
import uni from "../images/uni.png";
import logo from "../images/logo.png";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div class="container-fluid login-container">
      <div class="row justify-content-center align-items-center">
        <div class="col-md-6 ">
          <form
            onSubmit={handleSubmit}
            class="login-form p-4 border rounded shadow-sm"
          >
            <div class="divisao">
              <img src={logo} style={{ height: "120px" }} width="120px"></img>
              <h1 class="text-center mb-4 fw-bold fs-4">INICIAR SESIÓN</h1>
            </div>
            
            <div class="form-group">
              <label for="email">Usuario:</label>
              <input
                type="text"
                id="email"
                class="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingrese su usuario"
                required
              />
            </div>
            <div class="form-group">
              <label for="password">Contraseña:</label>
              <input
                type="password"
                id="password"
                class="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingrese su contraseña"
                required
              />
            </div>
            <button type="submit" class="btn btn-info btn-block fs-5 mt-3">
              Ingresar 
            </button>
          </form>
        </div>

        <div class="col-md-6 left-section">
          <img src={uni} style={{ height: "100vh" }} width="100%"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
