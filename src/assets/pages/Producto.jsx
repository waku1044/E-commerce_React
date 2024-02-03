import { useState, useEffect } from "react";
import { server } from "../../assets/components/server/server";
import { useParams } from "react-router-dom";

const Producto = () => {
  // const url = window.location.search;
  // const id = new URLSearchParams(url).get("id");
  const {id} = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    server.mostrarproducto(id).then((data) => setProduct(data));
  }, [id]);

  return (
    <>
      <button
        className="btn btn-primary my-3"
        onClick={() => window.history.back()}
      >
        Atras
      </button>
      <div className="cuadro row">
        <div className=" col-6">
          <img src={product.img} className="w-75" alt="producto" />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center bg-secondary col-6">
          <h5 className="card-title">{product.nombre}</h5>
          <p>{product.precio}</p>
          <p className="card-text">{product.descripcion}.</p>
          <p className="card-text">{product.categoria}.</p>
          <p className="card-text">
            <small className="text-body-secondary">
              Last updated 3 mins ago
            </small>
          </p>
        </div>
      </div>
    </>
  );
};

export default Producto;
