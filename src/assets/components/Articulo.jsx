import { Link } from "react-router-dom";
import { server } from "../../assets/components/server/server";
import { useState } from "react";

const Articulo = (props) => {
  const { img, titulo, precio, id, admin } = props;
  const [carrito, setCarrito] = useState(0);
  // console.log(props)
  function eliminar(e) {
    let id = e.target.id;
    e.target.parentNode.parentNode.parentNode.remove();
    server.eliminarproducto(id);
  }
  function agregar() {
    server.agregarcarrito(id);
  }
  return (
    <article className="text-center" id="star" style={{ maxWidth: "15rem" }}>
      <div className="card " style={{ width: "15rem", height: "23rem" }}>
        <img
          src={img}
          alt="producto"
          style={{ height: "10rem" }}
          className="producto card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title buscar">{titulo}</h5>
          <p className="card-text">
            $<strong>{precio}</strong>
          </p>
          <div className="d-flex flex-column gap-2">
            <Link
              to={`/producto/${id}`}
              className="verProducto btn btn-primary"
            >
              Ver producto
            </Link>
            {!admin && (
              <button className="btn btn-success fw-bold d-flex justify-content-center align-items-center" onClick={agregar}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-cart-plus me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z" />
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                </svg>
                <i>Agregar al Carrito</i>
              </button>
            )}
            {props.admin && (
              <Link to={`/adminEdit/${id}`} className="btn btn-success">
                Editar
              </Link>
            )}
            {props.admin && (
              <button className="btn btn-danger" id={id} onClick={eliminar}>
                Eliminar
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Articulo;
