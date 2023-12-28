import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./assets/pages/Register";
import Login from "./assets/pages/Login";
import Home from "./assets/pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />} ></Route>
          <Route path="/home" elelmnet={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
