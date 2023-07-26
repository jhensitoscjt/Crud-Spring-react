import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-center">
        <div className="container">
          <Link className="navbar-brand" to="/home01">
            Registros Creados
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="btn btn-outline-light" to="/adduser">
                  Agregar Usuario
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
