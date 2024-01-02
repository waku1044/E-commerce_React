import { useState } from "react";
import eyeClosed from "../img/eyeClose.svg";
import eyeOpen from "../img/eyeOpen.svg";





  const valuesInitial = {
    usuario: "",
    password: "",
  }
  const Formulario = () => {
    const [togglePassword, setTogglePassword] = useState(false);
    const [state, setState] = useState(valuesInitial);
    const [eye, setEye] = useState(eyeClosed);


function changeHandler(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
    
  }
  const handleData = (e)=>{
    e.preventDefault();
    console.log(state)
  };
  function toggle() {
    setEye(togglePassword ? eyeClosed : eyeOpen);
    setTogglePassword(!togglePassword);
  }
    return (
        <form action="" onSubmit={handleData} className="d-flex flex-column align-items-center w-100">
              <input
                type="text"
                className="inicio_input col-12 p-2 mb-4 w-50"
                placeholder="Usuario"
                name="usuario"
                values={state.usuario}
                onChange={changeHandler}
              />

              <input
                type={togglePassword ? "text" : "password"}
                className="inicio_input col-12 p-2 mb-4 w-50"
                placeholder="Contraseña"
                name="password"
                onChange={changeHandler}
              />
              <img src={eye} className="ojo" alt="eye" onClick={toggle} />

              <button
                type="submit"
                className="inicio_btn btn btn-primary col-12 w-50 font-monospace"
              >
                Entrar
              </button>
            </form>
    )
}

export default Formulario;