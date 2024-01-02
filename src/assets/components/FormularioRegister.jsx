import { useState } from "react";
import eyeOpen from "../img/eyeOpen.svg";
import eyeClosed from "../img/eyeClose.svg";




const dataInicial = {
    usuario: "",
    password: "",
    repeatpassword: "",
}
const FormularioRegister = () => {
    
const [eye, setEye] = useState(eyeClosed);
const [togglePassword, setTogglePassword] = useState(false);
const [state, setState] = useState(dataInicial);
    
    const changeData = (e) => {
        setState({
            ...state,
              [e.target.name]: e.target.value

        })        
    };

    const handleData = (e)=>{
        e.preventDefault();
        console.log(state)
    }
    function toggle() {
    setEye(eye === eyeClosed ? eyeOpen : eyeClosed);
    setTogglePassword(!togglePassword);
  }
    return (
        <form action="" onSubmit={handleData} className="d-flex flex-column align-items-center mb-3">
            <label>Usuario</label>
            <input
              type="text"
              className="inicio_input col-12 p-2  w-75"
              name="usuario"
              placeholder="Usuario..."
              onChange={changeData}
            />
            

            <label>Password</label>
            
            <input
              type={togglePassword ? "text" : "password"}
              className="inicio_input col-12 w-75 mb-3 pass "
              name="password"
              placeholder="Password..."
              onChange={changeData}
            /><img src={eye} className="eye position-relative" alt="eye" onClick={toggle} />

            

            <input
              type= {togglePassword ? "text" : "password"}
              className="inicio_input col-12 p-2 w-75 mb-4"
              name="repeatpassword"
              placeholder="Repeat Password"
              onChange={changeData}
              
            />
    
            <button
              type="submit"
              className="inicio_btn btn btn-primary col-12 w-50 font-monospace"  
            >
              Registrarse
            </button>
          </form>
    )
}

export default FormularioRegister;