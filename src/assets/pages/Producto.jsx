import { useState, useEffect } from "react";
import { server } from "../../assets/components/server/server";
import { useParams } from "react-router-dom";
import Footer from "../../assets/components/Footer";

const Producto = () => {
  // const url = window.location.search;
  // const id = new URLSearchParams(url).get("id");
  const { id } = useParams();

  const [product, setProduct] = useState({});
  
  
  useEffect(() => {
    server.mostrarproducto(id).then((data) => setProduct(data));
    
  }, [id]);

  return (
    <div className="pb-3" style={{background:'#ccc'}}>
      <button
        className="btn btn-primary my-3 ms-5"
        onClick={() => window.history.back()}
      >
        Atras
      </button>
      <h3 className="text-center mb-4">Producto</h3>
      <div className="card mx-auto " style={{width: "18rem"}}>
        <img src={product.img} className="card-img-top  mx-auto" alt={product.nombre}  />
        <div className="card-body text-center" style={{background: 'linear-gradient(90deg, #33FF96 0%, #33FFF3 35%, rgba(0,212,255,1) 100%)'}}>
          <h3 className="card-title ">{product.nombre}</h3>
          <p className="card-text">$ {product.precio}</p>
          <p className="card-text">{product.categoria}.</p>
          <p className="card-text">{product.descripcion}.</p>
          <p className="card-text">
            <small className="text-body-secondary">
              Last updated 3 mins ago
            </small>
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Producto;
