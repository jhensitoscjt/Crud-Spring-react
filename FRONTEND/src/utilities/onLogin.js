import React, { useState } from 'react';
import axios from 'axios';

const onLogin = async (email, password) => {
  console.log(email, password);
  const data = {
    email,
    password
  };

  try {
    const result = await axios.post("http://localhost:8080/login", data);
    console.log(result.data);

    if (result.data) {
      // Redireccionar a otra página si result.data tiene un valor
      window.location.href = "/home01"
    } else {
      // Si no hay resultado, puedes mostrar un mensaje de error o realizar alguna acción.
      console.log("Error de inicio de sesión");

    }
  } catch (error) {
    console.log("Error en la solicitud:", error);
  }
};

export default onLogin;