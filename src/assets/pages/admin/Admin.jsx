import sin_imagen from "../../img/no-image.png";
import Header from "../../components/HeaderHome";
import { useState, useEffect } from "react";
import { server }  from "../../components/server/server";
import { Link } from "react-router-dom";

const infoProducto = {
  imagen : "",
  titulo : "",
  precio : "",
  categoria : "",
  descripcion : ""
}
const Admin = () => {
  const [photo, setPhoto] = useState(sin_imagen);
  const [infoDate, setInfoDate] = useState(infoProducto);

  const handleData = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    setInfoDate({...infoDate,[e.target.name] : e.target.value});
    
  }
  useEffect(() => {
    infoDate.imagen && setPhoto(infoDate.imagen)
    console.log(infoDate)
  },[infoDate.imagen])

  const handleProduct = (e) => {
    e.preventDefault();
    
    server.agregarProducto(infoDate)
    setInfoDate(infoProducto)
    setPhoto(sin_imagen)
    

  }
  return (
    <>
      <Header />
      <Link to="/adminProduct" className="btn btn-success d-block mb-3 w-25 ms-3">Ver Lista de Productos</Link>
      <section className="agregar_producto row mx-3 ">
        <h2 className="agregar_title col-10  py-3">Agregar nuevo producto</h2>
        <form
          action=""
          className="agregar_detalles row d-flex flex-around px-4 pb-5"
          enctype="multipart/form-data"
          onSubmit={handleProduct}
        >
          <div className="">
            <input
              type="url"
              name="imagen" 
              className="agregar_url my-2 border-buttom p-2 col-8"
              placeholder="URL de la imagen"
              value={infoDate.imagen}
              onChange={handleData}
              required
            />
            <img src={photo} className="col-3 offset-1 rounded-circle mb-3" alt="img-cargada" />
          </div>

          <select 
          className="my-2 p-2" 
          name="categoria"
          onChange={handleData}
          >
            <option disabled defaultValue={"Selecciona una categoria"} value={""}  selected hidden
                
            >Selecciona una categoria</option>
            <option name="categoria" value="Star Wars" className="categoria"
            >
              Star Wars
            </option>
            <option name="categoria" value="Consola" className="categoria">
              Consola
            </option>
            <option name="categoria" value="Diversos" className="categoria">
              Diversos
            </option>
          </select>

          <input
            type="text"
            name="titulo"
            className="nombre_producto my-2 p-2"
            placeholder="Nombre del producto"
            onChange={handleData}
            value={infoDate.titulo}
            required
          />

          <input
            type="number"
            name="precio"
            className="precio my-2 p-2"
            placeholder="Precio del producto"
            onChange={handleData}
            value={infoDate.precio}
            required
          />

          <textarea
            type="text"
            name="descripcion"
            className="descripcion my-2 p-2"
            placeholder="Descripcion del producto"
            onChange={handleData}
            value={infoDate.descripcion}
            required
            
          ></textarea>

          <input type="submit" className="agregar btn btn-primary my-3 mx-auto w-75" value={"Agregar Producto"} />
            
          
        </form>
      </section>
    </>
  );
};

export default Admin;
