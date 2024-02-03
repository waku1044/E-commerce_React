import FormularioRegister from "../components/FormularioRegister";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import  Footer  from "../components/Footer";
import "../css/registro.css";


// import '../css/style.css';


const Register = () => {
 
  return (
    <main className="container">
      <Header />
      <div className="inicioSesion ">
        <div className="inicio_ingreso text-center">
          <h2 className="inicio_titulo pb-4">Registro</h2>
          <FormularioRegister />
          <Link className="text-decoration-none py-3" to="/">
              Ya tengo cuenta
            </Link>
        </div>
      </div>
        <Footer />
    </main>
  );
};

export default Register;
