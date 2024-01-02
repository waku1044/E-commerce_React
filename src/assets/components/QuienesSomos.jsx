
import Logo from "../img/Logo.svg";

const QuienesSomos = ()=>{

    return (
        <div className="quienesSomos row py-5 align-items-center ">
          <div className="quienes_contenido col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
            <img src={Logo} className="somos_img w-75" alt="Logo" />
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
    )
}

export default QuienesSomos;