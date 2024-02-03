import Logo from "../img/Logo.svg";
import { Link } from "react-router-dom";

const HeaderHome = ( props) => {
  return (
    <header className="d-flex flex-column align-items-center p-3 ">
      <div className="d-flex justify-content-between align-items-center w-100">
        <img src={Logo} className="w-50 " alt="Logo" />

        <Link
          to="/"
          className="btn btn-outline-primary rounded-pill text-capitalize w-25 "
        >
          {localStorage.getItem("user") ? `${localStorage.getItem("user")} / Salir` : "Iniciar Sesion"}
        </Link>
      </div>

      {props.buscar && <input
        type="search"
        placeholder="¿Que desea buscar?"
        className="gx-5 p-3 rounded-pill w-75 buscador "
      /> }
    </header>
  );
};

export default HeaderHome;
