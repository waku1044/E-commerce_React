import Footer from "../components/Footer";
import Header from "../components/Header";
import Formulario from "../components/Formulario";
import QuienesSomos from "../components/QuienesSomos";   
import { Link } from "react-router-dom";
import "../css/style.css";




const Login = () => {
 
  return (
    <>
      <Header />
      <main className="container-fluid">
        <div className="inicioSesion row pt-0 mt-0">
          <div className="inicio_ingreso d-flex flex-column justify-content-center align-items-center py-2">
            <h2 className="inicio_titulo pb-4">Iniciar Sesión</h2>
            <Formulario />
            
            <Link className="text-decoration-none py-3" to="/Register">
              No estoy registrado
            </Link>
          </div>
          <QuienesSomos />
        </div>
        

        <Footer />
      </main>
    </>
  );
};

export default Login;
