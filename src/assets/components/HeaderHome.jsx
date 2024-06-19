import Logo from "../img/Logo.svg";
import { Link } from "react-router-dom";

const HeaderHome = ( props) => {
  // ${localStorage.getItem("user")} /

  function pantalla(){
    if(window.innerWidth < 500){
      return 'Salir';
  
    }else{
      return localStorage.getItem("user") + ' / Salir';
    }

  }
  console.log(window.innerWidth)
  return (
    <header className="d-flex flex-column align-items-center p-3 ">
      <div className="d-flex justify-content-between align-items-center w-100">
        <img src={Logo} className="w-50 " alt="Logo" />

        <Link
          to="/"
          className="btn btn-outline-primary rounded-pill text-capitalize  "
        >
          {localStorage.getItem("user")? pantalla() : "Iniciar Sesion"

          }
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
