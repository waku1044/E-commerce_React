import Logo from "../img/Logo.svg";
import { Link } from "react-router-dom";
import useStore from "../../store/Store";
import { useState, useEffect } from "react";
import "../css/HeaderHome.css";

const HeaderHome = (props) => {
  // ${localStorage.getItem("user")} /
  const countCarito = useStore((state) => state.count);

  function pantalla() {
    if (window.innerWidth < 500) {
      return "Salir";
    } else {
      return localStorage.getItem("user") + " / Salir";
    }
  }
  console.log(window.innerWidth);
  return (
    <header className="d-flex flex-column align-items-center p-3 ">
      <div className="d-flex justify-content-between align-items-center w-100">
        <img src={Logo} className="w-50 " alt="Logo" />

        <Link
          to="/"
          className="btn btn-outline-primary rounded-pill text-capitalize  "
        >
          {localStorage.getItem("user") ? pantalla() : "Iniciar Sesion"}
        </Link>
      </div>

      <div className="d-flex justify-content-between align-items-center w-100">
        {props.buscar && (
          <input
            type="search"
            placeholder="¿Que desea buscar?"
            className="gx-5 p-3 rounded-pill w-75 buscador "
          />
        )}
        <div className="carrito">
          <h4 className="count">{countCarito}</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="green"
            class="bi bi-cart me-md-5 imgCarrito"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default HeaderHome;
