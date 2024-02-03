import { useState } from "react";
import eyeClosed from "../img/eyeClose.svg";
import eyeOpen from "../img/eyeOpen.svg";
// import useStore from "../../store/Store";
import { server } from "../../assets/components/server/server";

const valuesInitial = {
  user: "",
  pass: "",
};
const Formulario = () => {
  const [togglePassword, setTogglePassword] = useState(false);
  const [state, setState] = useState(valuesInitial);
  const [eye, setEye] = useState(eyeClosed);
  // const registrado = useStore(state=>state.usuario);

  // useEffect(()=>{
  //   if(registrado){
  //     console.log('Esto es loo que carga en el hijo', registrado)

  //   }
  // },[registrado])

  function changeHandler(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }
  const handleData = (e) => {
    e.preventDefault();
    if(state.user === 'admin' && state.pass === "admin"){
      localStorage.setItem("user", state.user);
      localStorage.setItem("password", state.pass);
      window.location.href = "/admin";
    }else{
        server.loginUser(state.user, state.pass)

    }
       
    
    // const dataUser = JSON.parse(localStorage.getItem('user'));
    // if (state.user === "" || state.pass === "") {
    //   alert("Todos los campos son obligatorios");
    // } else if (success) {
    //   localStorage.setItem("user", state.user);
    //   localStorage.setItem("password", state.pass);
    //   window.location.href = "/home";
    // } else {
    //   alert("Usuario o contraseña no registrados");
    // }
  };
  function toggle() {
    setEye(togglePassword ? eyeClosed : eyeOpen);
    setTogglePassword(!togglePassword);
  }
  return (
    <form
      action=""
      onSubmit={handleData}
      className="d-flex flex-column align-items-center w-100"
    >
      <input
        type="text"
        className="inicio_input col-12 p-2 mb-4 w-50"
        placeholder="Usuario"
        name="user"
        values={state.user}
        onChange={changeHandler}
      />

      <input
        type={togglePassword ? "text" : "password"}
        className="inicio_input col-12 p-2 mb-4 w-50"
        placeholder="Contraseña"
        name="pass"
        onChange={changeHandler}
      />
      <img src={eye} className="ojo" alt="eye" onClick={toggle} />

      <button
        type="submit"
        className="inicio_btn btn btn-primary col-12 w-25 font-monospace"
      >
        Entrar
      </button>
    </form>
  );
};

export default Formulario;
