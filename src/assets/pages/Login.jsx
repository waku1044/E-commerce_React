import Footer from "../components/Footer";
import Header from "../components/Header";
import Logo from '../img/Logo.svg';
import { Link } from 'react-router-dom';
import '../css/style.css';
import eyeClosed from '../img/eyeClose.svg';
import eyeOpen from '../img/eyeOpen.svg';
import { useState } from "react";

const Login = () => {

  const [togglePassword, setTogglePassword] = useState(false);
  const [eye, setEye] = useState(eyeClosed);

  function toggle() {
    setEye(togglePassword ? eyeClosed : eyeOpen);
    setTogglePassword(!togglePassword);
  }
  return (
    <>
      <div className="container-fluid">
        <p data-extra></p>

        <Header />
        <main>
          <div className="inicioSesion row pt-0 mt-0">
            <div className="inicio_ingreso d-flex flex-column justify-content-center align-items-center py-2">
              <h2 className="inicio_titulo pb-4">Iniciar Sesión</h2>
              <input
                type="text"
                className="inicio_input col-12 p-2 mb-4 w-50"
                placeholder="Usuario"
                
              />

              <input
                type={togglePassword ? "text" : "password"}
                className="inicio_input col-12 p-2 mb-4 w-50"
                placeholder="Contraseña"
                
              />
              <img
                src={eye}
                className="eye"
                alt="eye"
                onClick={toggle}
                
              />

              <button
                className="inicio_btn btn btn-primary col-12 w-50"
                data-btn
              >
                Entrar
              </button>
              <Link 
              className="text-decoration-none py-3" 
              to="/Register"
              >
                No estoy registrado
              
              </Link>
                
              
            </div>
          </div>
          <div className="quienesSomos row py-5 align-items-center ">
            <div className="quienes_contenido col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
              <img
                src={Logo}
                className="somos_img w-75"
                alt="Logo"
              />
              <p className="somos_parrafo">Quienes somos</p>
              <p className="somos_parrafo">Politica de privacidad</p>
              <p className="somos_parrafo">Programa de fidelidad</p>
              <p className="somos_parrafo">Nuestras tiendas</p>
              <p className="somos_parrafo">Quiero ser franquiciado</p>
              <p className="somos_parrafo">Anúncie aqui</p>
            </div>
            <div className="contacto_contenido col-12 col-md-6  d-flex flex-column">
              <h2 className="contacto_titulo  py-3">Hable con nosotros</h2>
              <input
                type="text"
                className="contacto_input  my-3 p-2 w-75 "
                placeholder="Nombre"
              />
              <textarea
                name="mensaje"
                className="contacto_textarea  my-3 p-2 w-75 "
                id="mensaje"
                placeholder="Escribe tu mensaje"
              ></textarea>
              <button className="contacto_btn col-5 btn btn-primary">
                Enviar Mensaje
              </button>
            </div>
          </div>

          <dialog data-modal></dialog>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Login;
