import { useState } from "react";

import Header from "../components/Header";
import "../css/registro.css";
import '../css/style.css';
import eyeOpen from "../img/eyeOpen.svg";
import eyeClosed from "../img/eyeClose.svg";

const Register = () => {
  const [eye, setEye] = useState(eyeClosed);
  const [togglePassword, setTogglePassword] = useState(false);

  function toggle() {
    setEye(eye === eyeClosed ? eyeOpen : eyeClosed);
    setTogglePassword(!togglePassword);
  }
  return (
    <main className="container">
      <Header />
      <div className="inicioSesion row">
        <div className="inicio_ingreso text-center">
          <h2 className="inicio_titulo pb-4">Registro</h2>

          <form action="" className="d-flex flex-column align-items-center">
            <label>Usuario</label>
            <input
              type="text"
              className="inicio_input col-12 p-2  w-75"
              name="usuario"
              placeholder="Usuario..."
              data-usuario
            />
            <p className="usuario text-danger d-inline "></p>

            <label>Password</label>

            <input
              type={togglePassword ? "text" : "password"}
              className="inicio_input col-12 w-75 pass "
              name="password"
              placeholder="Password..."
            /><img src={eye} className="eye" alt="eye" onClick={toggle} />

            <input
              type= {togglePassword ? "text" : "password"}
              className="inicio_input col-12 p-2 w-75"
              name="repeatpassword"
              placeholder="Repeat Password"
              data-repeat-contraseña
            />
            <p className="repeatpassword text-danger d-inline"></p>

            <button
              type="submit"
              className="inicio_btn btn btn-primary col-12 w-50 font-monospace"
              data-btn-registro
            >
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Register;
