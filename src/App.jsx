// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./assets/pages/Register";
import Login from "./assets/pages/Login";
import Home from "./assets/pages/Home";
import Producto from "./assets/pages/Producto";
import Admin from "./assets/pages/admin/Admin";
import AdminProduct from "./assets/pages/admin/AdminProduct";
import AdminEdit from "./assets/pages/admin/AdminEdit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />} ></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/producto/:id" element={<Producto />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/adminProduct" element={<AdminProduct />}></Route>
          <Route path="/adminEdit/:id" element={<AdminEdit />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
