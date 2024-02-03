import sin_imagen from "../../img/no-image.png";
import Header from "../../components/HeaderHome";
import { useState, useEffect } from "react";
import { server } from "../../components/server/server";
import { Link, useParams } from "react-router-dom";

const infoProducto = {
  imagen: "",
  titulo: "",
  precio: "",
  categoria: "",
  descripcion: "",
};
const AdminEdit = () => {
  const [photo, setPhoto] = useState(sin_imagen);
  const [infoDate, setInfoDate] = useState({ infoProducto });
  const { id } = useParams();

  const handleData = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setInfoDate({ ...infoDate, [e.target.name]: e.target.value });
  };
  // categoria: "Diversos";
  // descripcion: "Comic del pato lucas";
  // fecha: "25/1/2024";
  // hora: "1:52:21";
  // idproducto: "7edeecee-f202-4a11-b61f-09d7e760ff7d";
  // img: "https://i.pinimg.com/originals/d0/10/a9/d010a91be432ee80885eee84e3882e28.jpg";
  // nombre: "pato lucas";
  // precio: 234234;
  // __v: 0;
  // _id: "65b1e9057e142919d6a067db";
  useEffect(() => {
    server.mostrarproducto(id).then((data) => {
      setInfoDate(data)
      setPhoto(data.img || sin_imagen);
    });
    // console.log(infoDate)
  }, [id]);

  const handleProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await server.editarproducto(infoDate);
      console.log(infoDate); // Manejar la respuesta de la edición
      // Actualizar el estado después de la edición
      setInfoDate(infoDate);
      window.location.href = "/adminProduct";
      // Puedes mostrar un mensaje de éxito aquí
    } catch (error) {
      console.error(error); // Manejar el error de la edición
      // Puedes mostrar un mensaje de error aquí
    }
  };
  return (
    <>
      <Header />
      <Link
        to="/adminProduct"
        className="btn btn-success d-block mb-3 w-25 ms-3"
      >
        Ver Lista de Productos
      </Link>
      <section className="agregar_producto row mx-3">
        <h2 className="agregar_title col-10  py-3">Editar Producto</h2>
        <form
          action=""
          className="agregar_detalles row d-flex flex-around ps-4"
          enctype="multipart/form-data"
          onSubmit={handleProduct}
        >
          <div className="">
            <input
              type="url"
              name="img"
              className="agregar_url my-2 border-buttom p-2 col-8"
              placeholder="URL de la imagen"
              value={infoDate.img}
              onChange={handleData}
              required
            />
            <img
              src={photo}
              className="col-3 offset-1 rounded-circle mb-3"
              alt="img-cargada"
            />
          </div>

          <select className="my-2 p-2" name="categoria" onChange={handleData}>
            <option
              disabled
              defaultValue={"Selecciona una categoria"}
              value={""}
              
              hidden
            >
              Selecciona una categoria
            </option>
            <option name="categoria" value="Star Wars" className="categoria">
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
            name="nombre"
            className="nombre_producto my-2 p-2"
            placeholder="Nombre del producto"
            onChange={handleData}
            value={infoDate.nombre}
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

          <button
            type="submit"
            className="agregar btn btn-primary my-3 mx-auto w-75"
            
          >Editar Producto</button>
        </form>
      </section>
    </>
  );
};

export default AdminEdit;
